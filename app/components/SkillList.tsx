import { id } from "~/funcUtil";
import createDataList from "./createDataList";
import LinkWithTooltip from "./LinkWithTooltip";

const SkillList = createDataList<string>({
  selectId: id,
  className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3",
  Item: ({ data: slug }) => (
    <LinkWithTooltip to={'/skills/'+slug} tooltip={'/skills/'+slug}>
      {slug}
    </LinkWithTooltip>
  )
});

export default SkillList;