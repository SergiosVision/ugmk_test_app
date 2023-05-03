import { FC } from 'react';

import { ProductsDataSourceImpl } from '@services/datasources/products/products';
import { ListStorage } from '@services/datasources/products/storages/list.storage.service';

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper';

import { ProductsRepositoryImpl } from '../../data/repository';
import { GetProductsListCase } from '../../domain/usecases/getProductsList.ts';

import ViewController from './ViewController.tsx';
import { ProductsViewModel } from './viewModel.ts';

const dataSource = new ProductsDataSourceImpl(ListStorage);
const repository = new ProductsRepositoryImpl(dataSource);
const getProductsListCase = new GetProductsListCase(repository);
const viewModel = new ProductsViewModel({ getProductsListCase });

const Provider: FC = () => {
	return (
		<ErrorBoundaryWrapper>
			<ViewController viewModel={viewModel} />
		</ErrorBoundaryWrapper>
	);
};

export default Provider;
