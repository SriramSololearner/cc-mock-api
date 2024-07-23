export const styles = {
  topMainContainer: { background: "#f7f8fc", height: "100vh", width: "100%" },
  mainContainer: {
    p: 2,
  },
  productContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(160px, 100%), 2fr))",
    gap: "20px",
    background: "#f7f8fc",
  },
  productListContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",

    justifyContent: "space-between",
    background: " #ffffff",
    boxShadow: "0px 2px 8px 0px #cecfd3",
  },
  producImg: {
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
    width: { xs: "140px", sm: "180px", md: "195px" },
    height: { xs: "110px", sm: "140px" },
    position: "relative",
    margin: " auto",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
  productContent: {
    display: "flex ",
    justifyContent: "space-between ",
    padding: "10px",
    flexDirection: "column ",
    gap: "5px",
  },
  text1: {
    fontSize: { xs: "12px", sm: "14px" },
    fontWeight: "500",
    fontFamily: "Inter, sans-serif",
    lineHeight: "25px",
    color: "#1C1C1C",
  },
  text2: {
    fontSize: { xs: "14px", sm: "18px" },
    fontWeight: "600",
    fontFamily: "Inter, sans-serif",
    lineHeight: "30px",
    color: "#1C1C1C",
  },
  productContectTect: {
    display: "flex ",
    gap: "20px",
    justifyContent: "space-between ",
    alignItems: "center",
  },

  empty: {
    width: "100%",
    height: { xs: "100%", sm: "85vh", lg: "90vh" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pt: { xs: "10rem", sm: "8rem", lg: "6rem" },
    background: "#fff",
  },

  emptyImg: {
    width: { xs: "300px", sm: "600px", md: "800px" },
    height: { xs: "300px", sm: "600px", md: "800px" },
  },
  starIcon: { color: "#ecc304" },
};
