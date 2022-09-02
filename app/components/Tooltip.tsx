export default function Tooltip({
  tooltip,
  className = "",
  children,
}: {
  tooltip: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={"tooltip rounded-lg " + className} data-tip={tooltip}>
      {children}
    </div>
  );
}
