import CenterCardLayout from '~/components/CenterCardLayout';
import { Link } from '~/Link';

function PositionLink({ slug, title }: { slug: string; title: string }) {
  return (
    <Link
      className="flex-1 h-full m-1 btn btn-primary flex items-center justify-center"
      to={'/positions/' + slug}
    >
      <h2 className="text-4xl text-white">{title}</h2>
    </Link>
  );
}

export default function PositionPage() {
  return (
    <CenterCardLayout>
      <h1>어떤 직군의 공고를 보실래요?</h1>
      <div className="w-full h-96 mt-4 flex items-stretch">
        <PositionLink slug="frontend" title="프런트엔드" />
        <PositionLink slug="backend" title="백엔드" />
      </div>
    </CenterCardLayout>
  );
}
