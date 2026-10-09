import { ImageSourcePropType } from 'react-native';

export interface Shop {
    id: string;
    name: string;
    time: string;
    color: string;
    badge?: string;
    image: ImageSourcePropType;
}