import clsx from 'clsx';
import { useState } from 'react';

export default function AutoCompleteTextBox({
  initValue = '',
  candidates,
  className,
  ...props
}: React.ComponentProps<'input'> & {
  initValue: string;
  candidates?: string[];
}) {
  const [value, setValue] = useState(initValue);

  const isValid =
    value.length > 0 &&
    (candidates === undefined || candidates.includes(value));

  // 😱
  const recommendation = candidates
    ?.filter((candi) => candi.includes(value))
    .slice(0, 10);

  return (
    <div>
      <input
        {...props}
        className={clsx(
          'input input-bordered',
          className,
          isValid && 'input-success'
        )}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      {value !== '' && recommendation && (
        <ul className="dropdown-list">
          {recommendation.map((candi) => (
            <li key={candi} className="dropdown-item flex justify-center">
              <button
                type="button"
                className="py-2 px-4 w-full btn btn-sm btn-ghost lowercase font-normal"
                onClick={() => {
                  setValue(candi);
                }}
              >
                {candi}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
