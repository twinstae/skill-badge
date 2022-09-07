import { Link } from '~/Link';

function PositionLink({ slug, title }: { slug: string; title: string }) {
  return (
    <button className="w-1/2 h-full m-1 btn hover:btn-ghost text-xl md:text-2xl">
      <Link
        className="w-full h-full flex items-center justify-center"
        to={'/positions/' + slug}
      >
        {title}
      </Link>
    </button>
  );
}

export default function PositionPage() {
  return (
    <section className="w-full py-20 px-32">
      <div className="w-full h-full flex flex-col items-center">
        <h1>나의 포지션</h1>
        <div className="w-full h-96 mt-4 flex items-center">
          <PositionLink slug="frontend" title="프런트엔드" />
          <PositionLink slug="backend" title="백엔드" />
        </div>
      </div>
    </section>
  );
}
