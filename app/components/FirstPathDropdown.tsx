import React from 'react';
import { Portal } from '@reach/portal';
import * as menu from '@zag-js/menu';
import { useMachine, normalizeProps } from '@zag-js/react';
import { Link } from '~/Link';
import clsx from 'clsx';

// 4-1 prop에 타입을 정의한다
function FirstPathDropdown({
  current,
  currentPath,
}: {
  current: string;
  currentPath: string;
}) {
  // 1. zag에서 복사해서 가져온다
  const [dropdownState, dropdownSend] = useMachine(
    menu.machine({ id: '1', 'aria-label': 'skill' })
  );

  // 2. 불필요한 부분 지우고 이름을 바꾼다
  const dropdown = menu.connect(dropdownState, dropdownSend, normalizeProps);

  return (
    <>
      <button
        {...dropdown.triggerProps}
        className={clsx(currentPath === '/' + current && 'link-primary')}
      >
        {current}
      </button>
      <Portal>
        <div {...dropdown.positionerProps} className="z-50">
          <ul {...dropdown.contentProps} className="menu bg-base-100 w-56 p-2 rounded-lg shadow-xl">
            <li {...dropdown.getItemProps({ id: 'positions' })}>
              <Link
                to="/positions"
                className={clsx('/positions' === currentPath && 'link-primary')}
              >
                positions
              </Link>
            </li>
            <li {...dropdown.getItemProps({ id: 'skills' })}>
              <Link
                to="/skills"
                className={clsx('/skills' === currentPath && 'link-primary')}
              >
                skills
              </Link>
            </li>
          </ul>
        </div>
      </Portal>
    </>
  );
}

export default FirstPathDropdown;
