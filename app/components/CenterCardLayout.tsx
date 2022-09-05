import { useLocation } from '@remix-run/react';
import React from 'react';
import { Link } from '~/Link';

export default function CenterCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const path = location.pathname.slice(1).split('/');
  return (
    <main className="flex flex-row justify-center">
      <div className="p-4 m-4 rounded-xl shadow-xl h-full w-full max-w-xl">
        <div className="breadcrumbs">
          <ul>
            <li>
              <Link to="/">
              root
              </Link>
            </li>
            {path.map((item, i) => (
              <li key={item}>
                <Link to={'/'+path.slice(0, i+1).join('/')}>
                {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {children}
      </div>
    </main>
  );
}
