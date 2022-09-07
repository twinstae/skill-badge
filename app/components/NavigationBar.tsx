import { useLocation } from '@remix-run/react';
import clsx from 'clsx';
import React from 'react'
import { Link } from '~/Link';
import FirstPathDropdown from './FirstPathDropdown';

// https://zagjs.com/components/react/nested-menu

function BreadCrumbs() {
  const location = useLocation();
  const currentPath = location.pathname; // "/skills/agile" | "/skills" | "/"
  const pathParts = currentPath.split('/'); // ["", "skills", "agile"] | ["", "skills"] | [""]
  return (
    <div className="breadcrumbs pl-2">
      <ul>
        <li>
          <Link to="/">역량 배지</Link>
        </li>
        <li>
          <FirstPathDropdown current={pathParts[1] || "어디로?"} currentPath={currentPath} />
        </li>
        {pathParts.slice(2).map((item, i) => {
          const itemPath = pathParts.slice(0, i +3).join('/');

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