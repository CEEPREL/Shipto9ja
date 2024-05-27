export interface Product {
  imagePath: string;
  title: string;
  price: number;
}

export const products: Product[] = [
  {
    imagePath: require("../../assets/images/image1.png"),
    title: "Product 1",
    price: 1999.99,
  },
  {
    imagePath: require("../../assets/images/image2.png"),
    title: "Product 2",
    price: 2999.99,
  },
  {
    imagePath: require("../../assets/images/image3.png"),
    title: "Product 3",
    price: 3999.99,
  },
  {
    imagePath: require("../../assets/images/image4.png"),
    title: "Product 4",
    price: 4999.99,
  },
  {
    imagePath: require("../../assets/images/image5.png"),
    title: "Product 5",
    price: 59.99,
  },
  {
    imagePath: require("../../assets/images/image6.png"),
    title: "Product 6",
    price: 69.99,
  },
  {
    imagePath: require("../../assets/images/image7.png"),
    title: "Product 7",
    price: 79.99,
  },
  {
    imagePath: require("../../assets/images/image8.png"),
    title: "Product 8",
    price: 89.99,
  },
  {
    imagePath: require("../../assets/images/image9.png"),
    title: "Product 9",
    price: 99.99,
  },
  {
    imagePath: require("../../assets/images/image10.png"),
    title: "Product 10",
    price: 109.99,
  },
];
