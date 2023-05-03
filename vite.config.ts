import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		strictPort: true,
		port: 3000
	},
	build: {
		sourcemap: false
	},
	resolve: {
		alias: [
			{ find: 'node-fetch', replacement: 'isomorphic-fetch' },
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{ find: '@common', replacement: path.resolve(__dirname, 'src/common') },
			{ find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
			{ find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
			{
				find: '@types',
				replacement: path.resolve(__dirname, 'src/common/types')
			},
			{ find: '@modules', replacement: path.resolve(__dirname, 'src/modules') },
			{
				find: '@services',
				replacement: path.resolve(__dirname, 'src/services')
			},
			{
				find: '@utils',
				replacement: path.resolve(__dirname, 'src/common/utils')
			},
			{
				find: '@components',
				replacement: path.resolve(__dirname, 'src/common/components')
			}
		]
	}
});
