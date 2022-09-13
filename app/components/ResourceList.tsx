import { id } from '~/funcUtil';
import createOptionalDataList from './createDataList';

const ResourceList = createOptionalDataList<string>({
	selectId: id,
	Item: ({ data }) => <span>{data}</span>,
});

export default ResourceList;
