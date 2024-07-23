import { Box, Rating, Typography } from "@mui/material";
import { Component } from "react";
import { styles } from "./styles";
interface Istate {
  products: {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    brand: string;
    category: string;
    thumbnail: string;
  }[];
  error: string;
}
interface Iprops {}
export default class Products extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      products: [],
      error: "",
    };
  }
  componentDidMount(): void {
    this.getProducts();
  }
  getProducts = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ products: json.products }))
      .catch((error) => {
        this.setState({ error: error });
      });
  };
  render() {
    const { products, error } = this.state;
    return (
      <Box sx={styles.topMainContainer}>
        {products.length !== 0 ? (
          <Box sx={styles.mainContainer}>
            <Box sx={styles.productContainer}>
              {products.map(
                (item) =>
                  item.id > 0 && (
                    <Box key={item.id} sx={styles.productListContainer}>
                      <Box>
                        <Box sx={styles.producImg}>
                          <Box
                            component={"img"}
                            src={item.thumbnail}
                            alt="img"
                            sx={styles.image}
                            id="image"
                          />
                        </Box>
                        <Box sx={styles.productContent}>
                          <Rating
                            name="simple-controlled"
                            value={item.rating}
                          />

                          <Typography sx={styles.text1}>
                            {item.title.slice(0, 20)}
                          </Typography>
                          <Box sx={styles.productContectTect}>
                            <Box>
                              <Typography data-testId={'price'} sx={styles.text2}>
                                ₹ {item.price}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )
              )}
            </Box>
          </Box>
        ) : (
          <Box sx={styles.empty}>
            <Box
              component={"img"}
              src="https://assets-v2.lottiefiles.com/a/0e30b444-117c-11ee-9b0d-0fd3804d46cd/BkQxD7wtnZ.gif"
              sx={styles.emptyImg}
            />
          </Box>
        )}
        {error && (
          <Typography data-testid="alert">Oops, failed to fetch!</Typography>
        )}
      </Box>
    );
  }
}
