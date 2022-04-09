export interface ProductProps {
  product: productType;
}

export type productType = {
  vendor: string;
  name: string;
  price: number;
  oldPrice: number;
  images: {
    file:{
      url:string
    }
  }[];
  description: string;
  slug: string;
  id: string;
};
