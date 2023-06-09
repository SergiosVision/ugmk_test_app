import { ChangeEvent, FC } from 'react';

import Text from '@components/ui/typography/text/Text';

import { ProductType } from '@modules/products/typings/productType';

import ContentContainer from './ContentContainer';
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
		<ContentContainer className={styles.wrapper}>
			<div className={styles.filter}>
				<Text>Фильтр по типу продукции:</Text>
				<select
					className={styles.select}
					value={productType}
					onChange={handleChangeFilter}
				>
					{Object.values(ProductType).map((value, index) => (
						<option key={value} value={value}>
							{value === ProductType.ALL ? 'Все продукты' : `Продукт ${index}`}
						</option>
					))}
				</select>
			</div>
		</ContentContainer>
	);
};

export default Header;
