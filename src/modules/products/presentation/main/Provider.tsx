import { FC } from 'react';

import localStorageService from '@services/localStorage.service';

import { ProductsDataSourceImpl } from '@modules/products/data/datasource/products';
import { ListStorage } from '@modules/products/data/datasource/storages/listMemoryStorage';
import { ProductsRepositoryImpl } from '@modules/products/data/repository';
import { GetProductsListCase } from '@modules/products/domain/usecases/getProductsList';

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
	return <ViewController viewModel={viewModel} />;
};

export default Provider;
