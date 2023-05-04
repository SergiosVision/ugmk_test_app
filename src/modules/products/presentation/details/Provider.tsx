import { FC } from 'react';

import { ProductsDataSourceImpl } from '@services/datasources/products/products';
import { ListStorage } from '@services/datasources/products/storages/listMemoryStorage';

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper';

import { ProductsRepositoryImpl } from '../../data/repository';
import { GetFactoryDetailsCase } from '../../domain/usecases/getFactoryDetails';

import ViewController from './ViewController';
import { FactoryDetailsViewModel } from './viewModel';

const dataSource = new ProductsDataSourceImpl(ListStorage);
const repository = new ProductsRepositoryImpl(dataSource);
const getFactoryDetailsCase = new GetFactoryDetailsCase(repository);
const viewModel = new FactoryDetailsViewModel({ getFactoryDetailsCase });

const Provider: FC = () => {
	return (
		<ErrorBoundaryWrapper>
			<ViewController viewModel={viewModel} />
		</ErrorBoundaryWrapper>
	);
};

export default Provider;
