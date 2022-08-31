import { id } from "~/funcUtil";
import createDataList from "./createDataList";
import LinkWithTooltip from "./LinkWithTooltip";

const SkillList = createDataList<string>({
  selectId: id,
  Item: ({ data: slug }) => (
    <LinkWithTooltip to={'/skills/'+slug} tooltip={`/${slug}`}>
      /{slug}
    </LinkWithTooltip>
  )
});

export default SkillList;