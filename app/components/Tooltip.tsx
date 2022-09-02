export default function Tooltip({
  tooltip,
  isOpen = false,
  className = "",
  children,
}: {
  tooltip: string;
  isOpen?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={["tooltip rounded-lg", (isOpen ? "tooltip-open" : ""), className].join(" ")} data-tip={tooltip}>
      {children}
    </div>
  );
}
