interface Product {
    category: string;
    id: string;
    price: number;
    description: string;
    stockLevel: number;
    imagePath: string;
    discountPercentage: number;
    isFeaturedProduct: number;
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any;
  }