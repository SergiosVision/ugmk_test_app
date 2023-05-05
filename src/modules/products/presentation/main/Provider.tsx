import { FC } from 'react';

import { ProductsDataSourceImpl } from '@services/datasources/products/products';
import { ListStorage } from '@services/datasources/products/storages/listMemoryStorage';
import localStorageService from '@services/localStorage.service';

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper';

import { ProductsRepositoryImpl } from '../../data/repository';
import { GetProductsListCase } from '../../domain/usecases/getProductsList';

import ViewController from './ViewController';
import { ProductsViewModel } from './viewModel';

const dataSource = new ProductsDataSourceImpl(ListStorage);
const repository = new ProductsRepositoryImpl(dataSource);
const getProductsListCase = new GetProductsListCase(repository);
const viewModel = new ProductsViewModel(
	{ getProductsListCase },
	localStorageService
);

const Provider: FC = () => {
	return (
		<ErrorBoundaryWrapper>
			<ViewController viewModel={viewModel} />
		</ErrorBoundaryWrapper>
	);
};

export default Provider;
