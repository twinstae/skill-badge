import { Link } from "../Link";

export default function Index() {
  return (
    <div className="flex flex-row justify-center">
      <div className="p-4 m-4 rounded-xl shadow-xl max-w-2xl">
        <h1 className="text-3xl">역량 배지</h1>
        <div className="mx-auto mt-16 max-w-7xl text-center">
          <Link
            to="/skills"
            className="text-xl text-blue-600 underline"
          >
            역량 보러가기
          </Link>
        </div>
      </div>
    </div>
  );
}
