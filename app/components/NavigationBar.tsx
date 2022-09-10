import React from 'react';
import { Link } from '~/Link';
import { useLocation } from '@remix-run/react';
import clsx from 'clsx';
import {
  CheckBadgeIcon as CheckBadgeOutlineIcon,
  DocumentTextIcon as DocumentTextOutlineIcon,
  ComputerDesktopIcon as ComputerDesktopOutlineIcon,
} from '@heroicons/react/24/outline';
import {
  CheckBadgeIcon as CheckBadgeSolidIcon,
  DocumentTextIcon as DocumentTextSolidIcon,
  ComputerDesktopIcon as ComputerDesktopSolidIcon,
} from '@heroicons/react/24/solid';
import HoverableIcon, { type IconT } from './icons/HoverableIcon';
// import FirstPathDropdown from './FirstPathDropdown';

// function BreadCrumbs() {
//   const location = useLocation();
//   const currentPath = location.pathname; // "/skills/agile" | "/skills" | "/"
//   const pathParts = currentPath.split('/'); // ["", "skills", "agile"] | ["", "skills"] | [""]
//   return (
//     <div className="breadcrumbs p-0">
//       <ul className="p-2">
//         <li>
//           <Link to="/" className="btn btn-ghost btn-sm normal-case text-lg">
//             역량 배지
//           </Link>
//         </li>
//         <li>
//           <FirstPathDropdown
//             current={pathParts[1] || '어디로?'}
//             currentPath={currentPath}
//           />
//         </li>
//         {pathParts.slice(2).map((item, i) => {
//           const itemPath = pathParts.slice(0, i + 3).join('/');

//           return (
//             <li key={item}>
//               <Link
//                 to={itemPath}
//                 className={clsx(
//                   'btn btn-ghost btn-sm normal-case text-lg font-normal',
//                   itemPath === currentPath && 'link-primary'
//                 )}
//                 aria-current={itemPath === currentPath}
//               >
//                 {item}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
// <BreadCrumbs />

const paths = [
  {
    title: '직군',
    path: 'positions',
    icons: [DocumentTextSolidIcon, DocumentTextOutlineIcon],
  },
  {
    title: '역량',
    path: 'skills',
    icons: [ComputerDesktopSolidIcon, ComputerDesktopOutlineIcon],
  },
  {
    title: '배지',
    path: 'badges',
    icons: [CheckBadgeSolidIcon, CheckBadgeOutlineIcon],
  },
] as { title: string; path: string; icons: [IconT, IconT] }[];

function NavigationBar() {
  const location = useLocation();
  const currentPath = location.pathname; // "/skills/agile" | "/skills" | "/"
  return (
    <nav className="sticky top-0 left-0 w-full z-40 border-b-2 p-0 pl-2 bg-base-100">
      <ul className="flex justify-evenly w-1/2">
        {paths.map(({ title, path, icons }) => (
          <li key={path}>
            <Link
              to={'/' + path}
              className={clsx(
                'flex flex-col w-fit',
                currentPath.startsWith('/' + path)
                  ? 'link-primary'
                  : 'hover:text-primary focus:text-primary'
              )}
            >
              <HoverableIcon icons={icons} label="" />
              <span className="w-full text-center">{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
