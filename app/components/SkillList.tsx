import { id } from '~/funcUtil';
import createOptionalDataList from '~/components/createDataList';
import { Link } from '~/Link';
import clsx from 'clsx';

export function SkillLink({ slug, className }: {
	slug: string;
	className?: string;
}) {
	return (
		<Link
			to={`/skills/${slug}`}
			className={clsx(
				'pl-2 pr-2 p-1 m-1 rounded-md bg-quote border-2 border-transparent focus:border-primary-focus text-primary justify-center',
				className,
			)}
		>
			{slug}
		</Link>
	);
}

const SkillList = createOptionalDataList<string>({
	selectId: id,
	className: 'grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3',
	Item: ({ data: slug }) => <SkillLink slug={slug} />,
});

export default SkillList;
