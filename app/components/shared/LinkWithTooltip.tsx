import clsx from 'clsx';
import { Link, type ILink } from '~/Link';
import Tooltip from './Tooltip';

export default function LinkWithTooltip({
  to,
  tooltip,
  children,
  className,
  tooltipClass
}: React.ComponentProps<ILink> & { tooltip: string, tooltipClass?: string }) {
  // Link라는 컴포넌트의 Props 타입 & tooltip이라는 string prop이 추가된 타입이다
  return (
    <Link to={to} className={clsx('link-primary p-0 rounded-lg', className)} >
      <Tooltip className={clsx("w-full", tooltipClass)} tooltip={tooltip}>
        {children}
      </Tooltip>
    </Link>
  );
}
