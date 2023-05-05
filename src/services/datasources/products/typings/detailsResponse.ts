import { Product } from './product';

export interface DetailsResponse {
	factory_id: number;
	products: Product[];
}
