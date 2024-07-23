import { render, screen, waitFor } from "@testing-library/react";
import Products from "../Products";
const mockData = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      price: 549,
      rating: 4.69,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
  ],
};
describe("All Products", () => {
  test("renders products without crashing", () => {
    render(<Products />);
    expect(screen.queryByText(/iPhone 9/i)).toBeNull();
  });
  test("renders properly with empty data", () => {
    globalThis.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve({ products: [] }),
      });
    });
    render(<Products />);
    expect(screen.queryByText(/iPhone 9/i)).toBeNull();
  });
  test("fetch users data", async () => {
    globalThis.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve({ products: mockData.products }),
      });
    });
    render(<Products />);
    await waitFor(() => screen.findByText(/iPhone 9/i));
    expect(screen.getByText(/iPhone 9/i)).toBeInTheDocument();
  });
  test("User enters scren eith error", async () => {
    globalThis.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject("error"));
    render(<Products />);
    await waitFor(() => screen.findByTestId("alert"));

    expect(screen.getByTestId("alert")).toHaveTextContent(
      "Oops, failed to fetch!"
    );
  });
});
