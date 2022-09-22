import * as ReactDOMServer from 'react-dom/server';

export function renderServerSide(element: React.ReactElement) {
	const container = document.createElement('div');
	document.body.appendChild(container);
	container.innerHTML = ReactDOMServer.renderToString(element);
	return { container };
}
