import { ProductType } from '../typings/productType.ts';

export const getSumOfProductsByType = (
	values: KeyValue<number>,
	type?: ProductType
) => {
	if (!type) {
		return Object.keys(values).reduce(
			(previousValue, key) => previousValue + values[key],
			0
		);
	} else {
		return values[type] || 0;
	}
};
