import { configure } from 'mobx';
import ReactDOM from 'react-dom/client';

import App from './App';

import '@assets/styles/globals.scss';

configure({
	enforceActions: 'always',
	computedRequiresReaction: true,
	reactionRequiresObservable: false,
	observableRequiresReaction: true
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
