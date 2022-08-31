import { id } from "~/funcUtil";
import createDataList from "./createDataList";

const ResourceList = createDataList<string>({
  selectId: id,
  Item: ({ data }) => (
    <span>{data}</span>
  )
});

export default ResourceList;