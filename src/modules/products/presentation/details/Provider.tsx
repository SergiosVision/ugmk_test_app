import { FC } from 'react';

import { ProductsDataSourceImpl } from '@modules/products/data/datasource/products';
import { ListStorage } from '@modules/products/data/datasource/storages/listMemoryStorage';
import { ProductsRepositoryImpl } from '@modules/products/data/repository';
import { GetFactoryDetailsCase } from '@modules/products/domain/usecases/getFactoryDetails';

import ViewController from './ViewController';
import { FactoryDetailsViewModel } from './viewModel';

const dataSource = new ProductsDataSourceImpl(ListStorage);
const repository = new ProductsRepositoryImpl(dataSource);
const getFactoryDetailsCase = new GetFactoryDetailsCase(repository);
const viewModel = new FactoryDetailsViewModel({ getFactoryDetailsCase });

const Provider: FC = () => {
	return <ViewController viewModel={viewModel} />;
};

export default Provider;
