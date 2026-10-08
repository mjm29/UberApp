import { ImageSourcePropType } from 'react-native';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: ImageSourcePropType;
  subtitle?: string;
}

export interface ConvenienceCardData {
  id: string;
  categoryTitle: string;
  storeName: string;
  storeLogo: ImageSourcePropType;
  products: Product[];
}