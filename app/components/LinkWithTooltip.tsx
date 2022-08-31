import { Link } from '~/Link';

export default function LinkWithTooltip({
  to,
  tooltip,
  children,
  className,
}: React.ComponentProps<typeof Link> & { tooltip: string }) {
  return (
    <Link to={to} className={'p-0 rounded-lg ' + className}>
      <div className="tooltip w-full rounded-lg p-2" data-tip={tooltip}>
        {children}
      </div>
    </Link>
  );
}
