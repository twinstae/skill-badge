import { useLocation } from '@remix-run/react';
import clsx from 'clsx';
import React from 'react';
import { Link } from '~/Link';
import FirstPathDropdown from './FirstPathDropdown';

function BreadCrumbs() {
  const location = useLocation();
  const currentPath = location.pathname; // "/skills/agile" | "/skills" | "/"
  const pathParts = currentPath.split('/'); // ["", "skills", "agile"] | ["", "skills"] | [""]
  return (
    <div className="breadcrumbs p-0">
      <ul className="p-2">
        <li>
          <Link to="/" className="btn btn-ghost btn-sm normal-case text-lg">
            역량 배지
          </Link>
        </li>
        <li>
          <FirstPathDropdown
            current={pathParts[1] || '어디로?'}
            currentPath={currentPath}
          />
        </li>
        {pathParts.slice(2).map((item, i) => {
          const itemPath = pathParts.slice(0, i + 3).join('/');

          return (
            <li key={item}>
              <Link
                to={itemPath}
                className={clsx(
                  'btn btn-ghost btn-sm normal-case text-lg font-normal',
                  itemPath === currentPath && 'link-primary'
                )}
                aria-current={itemPath === currentPath}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function NavigationBar() {
  return (
    <nav className="sticky top-0 left-0 w-full z-40 border-b-2 p-0 pl-2 bg-base-100">
      <BreadCrumbs />
    </nav>
  );
}

export default NavigationBar;
