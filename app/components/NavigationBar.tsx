import { useLocation } from '@remix-run/react';
import clsx from 'clsx';
import React from 'react'
import { Link } from '~/Link';
import FirstPathDropdown from './Dropdown';

// https://zagjs.com/components/react/nested-menu

function BreadCrumbs() {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathParts = currentPath.slice(1).split('/');
  return (
    <div className="breadcrumbs">
      <ul>
        <li>
          <Link to="/" className="btn btn-ghost btn-sm">역량 배지</Link>
        </li>
        {pathParts.length > 1 && (
           <li>
            <FirstPathDropdown current={pathParts[0]} currentPath={currentPath} />
          </li>
        )}
        {pathParts.slice(1).map((item, i) => {
          const itemPath = '/' + pathParts.slice(0, i + 1).join('/');

          return (
            <li key={item}>
              <Link
                to={itemPath}
                className={clsx(
                  itemPath === currentPath && 'link-primary'
                )}
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
    <nav className="sticky top-0 left-0 bg-white w-full z-40 border-b-2 p-2 navbar">
      <BreadCrumbs />
    </nav>
  )
}

export default NavigationBar