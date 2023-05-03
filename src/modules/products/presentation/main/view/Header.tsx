import { ChangeEvent, FC } from 'react';

import Text from '@components/ui/typography/text/Text.tsx';

import { ProductType } from '../../../typings/productType.ts';

import styles from './styles/Header.module.scss';

interface Props {
	productType: ProductType;
	changeFilter: (type: ProductType) => void;
}

const Header: FC<Props> = ({ changeFilter, productType }) => {
	const handleChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
		changeFilter(e.target.value as ProductType);
	};

	return (
		<section className={styles.wrapper}>
			<div className={styles.filter}>
				<Text>Filter by product type:</Text>
				<select
					className={styles.select}
					value={productType}
					onChange={handleChangeFilter}
				>
					<option value={ProductType.ALL}>All</option>
					<option value={ProductType.PRODUCT_1}>Product 1</option>
					<option value={ProductType.PRODUCT_2}>Product 2</option>
				</select>
			</div>
		</section>
	);
};

export default Header;
