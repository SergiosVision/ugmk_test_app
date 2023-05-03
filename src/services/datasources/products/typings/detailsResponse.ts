import { Product } from './product.ts';

export type DetailsResponse = {
	factory_id: number;
	products: Product[];
};
