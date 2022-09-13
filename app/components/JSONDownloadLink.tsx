import React from 'react';

function JSONDownloadLink(
	props: React.ComponentProps<'a'> & { jsonData: string; fileName: string },
) {
	const dataStr =
		`data:text/json;charset=utf-8,${encodeURIComponent(props.jsonData)}`;
	return (
		<a {...props} href={dataStr} download={props.fileName}>
			{props.children}
		</a>
	);
}

export default JSONDownloadLink;
