import { Link } from '~/Link';

function PositionLink({ slug, title }: { slug: string; title: string }) {
  return (
    <Link
      className="w-1/2 h-full m-1 btn btn-primary flex items-center justify-center"
      to={'/positions/' + slug}
    >
      <h2 className="text-4xl text-white">{title}</h2>
    </Link>
  );
}

export default function PositionPage() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-xl h-full flex flex-col items-center">
        <h1>어떤 직군의 공고를 보실래요?</h1>
        <div className="w-full h-96 mt-4 flex items-center">
          <PositionLink slug="frontend" title="프런트엔드" />
          <PositionLink slug="backend" title="백엔드" />
        </div>
      </div>
    </section>
  );
}
