import { useId } from "react";

export default function createOptionalDataList<T>({
  selectId,
  Item,
  className = '',
}: {
  selectId: (data: T) => string;
  Item: (props: { data: T }) => JSX.Element;
  className?: string;
}) {
  return function OptionalDataList({
    title,
    dataList,
  }: {
    title: string;
    dataList: T[];
  }) {
    const titleId = useId();
    if (dataList.length === 0) {
      return null;
    }

    return (
      <>
        <h2 id={titleId}>{title}</h2>
        <ul aria-labelledby={titleId} className={'menu ' + className}>
          {dataList.map((data) => (
            <li key={selectId(data)} className="rounded-lg">
              <Item data={data} />
            </li>
          ))}
        </ul>
      </>
    );
  };
}
