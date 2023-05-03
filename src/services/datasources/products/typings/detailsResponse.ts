import { Product } from './product.ts';

export type DetailsResponse = {
	factoryId: number;
	products: Product[];
};
