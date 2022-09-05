import { Link as RemixLink } from '@remix-run/react';

export type ILink = (props: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) => JSX.Element | null;

export const Link: ILink = RemixLink;

// ({ to, className, children }) => (
//   <a href={to} className={className}>
//     {children}
//   </a>
// );
