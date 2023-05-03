import { number, object, string } from 'yup';

import { Model } from '@common/model/model.ts';

export class ProductListModel extends Model {
	id: NumberOrNull = null;
	factory_id: NumberOrNull = null;
	date: StringOrNull = null;
	product_weight: NumberOrNull = null;

	getSchema() {
		return object().shape({
			id: number(),
			factory_id: number(),
			date: string().nullable(),
			product_weight: number().nullable()
		});
	}
}
