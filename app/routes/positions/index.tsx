import { json, type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import { Link } from '~/Link';
import { context } from '~/models/context';
import type { PositionT } from '~/models/requirements/schema';

type LoaderData = {
	positions: PositionT[];
};

export const loader: LoaderFunction = async () => {
	const positions = await context.positionsRepo.getPositionList();
	return json<LoaderData>({
		positions,
	});
};

function PositionLink({ slug, title }: { slug: string; title: string }) {
	return (
		<Link
			className="flex-1 h-full m-1 btn btn-primary flex items-center justify-center"
			to={`/positions/${slug}`}
		>
			<h2 className="text-4xl text-white">{title}</h2>
		</Link>
	);
}

export default function PositionPage() {
	const { positions } = useLoaderData() as LoaderData;

	return (
		<CenterCardLayout>
			<h1>어떤 직군의 공고를 보실래요?</h1>
			<div className="w-full h-96 mt-4 flex items-stretch">
				{positions.map(
					(position) => (
						<PositionLink key={position.slug} {...position} />
					),
				)}
			</div>
		</CenterCardLayout>
	);
}
