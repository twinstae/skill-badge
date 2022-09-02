export default function createDataList<T>({
  selectId,
  Item,
  className = "",
}: {
  selectId: (data: T) => string,
  Item: (props: { data: T }) => JSX.Element,
  className?: string
}){
  return function DataList({
    title,
    titleId,
    dataList
  }: {
    title: string,
    titleId: string,
    dataList: T[]
  }) {
    return  (
      dataList.length > 0 ? (
        <>
          <h2 id={titleId}>{title}</h2>
          <ul aria-labelledby={titleId} className={"menu " + className}>
            {dataList.map((data) => (
              <li key={selectId(data)} className="rounded-lg">
                <Item data={data} />
              </li>
            ))}
          </ul>
        </>
      ) : null
    );
  }
}