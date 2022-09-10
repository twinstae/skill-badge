import React from 'react';
import { Portal } from '@reach/portal';
import * as menu from '@zag-js/menu';
import { useMachine, normalizeProps } from '@zag-js/react';
import { Link } from '~/Link';
import clsx from 'clsx';
import { useNavigate } from '@remix-run/react';

// 4-1 prop에 타입을 정의한다
function FirstPathDropdown({
  current,
  currentPath,
}: {
  current: string;
  currentPath: string;
}) {
  const naviagate = useNavigate();
  // 1. zag에서 복사해서 가져온다
  // https://zagjs.com/components/react/nested-menu
  const [dropdownState, dropdownSend] = useMachine(
    menu.machine({
      id: 'first-path-dropdown',
      'aria-label': currentPath + ' 이동하려면 클릭',
      onSelect: naviagate
    })
  );

  // 2. 불필요한 부분 지우고 이름을 바꾼다
  const api = menu.connect(dropdownState, dropdownSend, normalizeProps);

  return (
    <>
      <button
        {...api.triggerProps}
        className={clsx(
          'btn btn-ghost btn-sm normal-case text-lg font-normal',
          currentPath === '/' + current && 'link-primary'
        )}
      >
        {current}
      </button>
      <Portal>
        <div {...api.positionerProps} className="z-50">
          <ul
            {...api.contentProps}
            className="menu bg-base-100 w-56 p-2 rounded-lg shadow-xl"
          >
            <li {...api.getItemProps({ id: '/positions' })}>
              <Link
                to="/positions"
                className={clsx(
                  '/positions' === currentPath && 'link-primary'
                )}
                aria-current={'/positions' === currentPath}
              >
                positions 채용 공고
              </Link>
            </li>
            <li {...api.getItemProps({ id: '/skills' })}>
              <Link
                to="/skills"
                className={clsx(
                  '/skills' === currentPath && 'link-primary'
                )}
                aria-current={'/skills' === currentPath}
              >
                skills 역량
              </Link>
            </li>
            <li {...api.getItemProps({ id: '/badges' })}>
              <Link
                to="/badges"
                className={clsx(
                  '/badges' === currentPath && 'link-primary'
                )}
                aria-current={'/badges' === currentPath}
              >
                badges 배지
              </Link>
            </li>
          </ul>
        </div>
      </Portal>
    </>
  );
}

export default FirstPathDropdown;
