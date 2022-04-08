export interface ProductProps {
  product: productType;
}

export type productType = {
  brand: string;
  name: string;
  price: number;
  oldPrice: number;
  img: string;
};
