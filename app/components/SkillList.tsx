import { id } from '~/funcUtil';
import createOptionalDataList from '~/components/createDataList';
import LinkWithTooltip from '~/components/shared/LinkWithTooltip';

const SkillList = createOptionalDataList<string>({
  selectId: id,
  className: 'grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3',
  Item({ data: slug }) {
    return (
      <LinkWithTooltip
        to={'/skills/' + slug}
        tooltip={'/skills/' + slug}
        className="p-1 m-1 rounded-md bg-quote border-2 border-transparent focus:border-primary-focus"
      >
        {slug}
      </LinkWithTooltip>
    );
  },
});

export default SkillList;
