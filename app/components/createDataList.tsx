export default function createDataList<T>({
  selectId,
  Item
}: {
  selectId: (data: T) => string,
  Item: (props: { data: T }) => JSX.Element
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
          <ul aria-labelledby={titleId} className="menu">
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