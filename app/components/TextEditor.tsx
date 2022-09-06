import { marked } from 'marked';
import { useState } from 'react';

export function TextEditor({
  id,
  name,
  initValue = '',
}: {
  id: string;
  name: string;
  initValue: string;
}) {
  const [value, setValue] = useState(initValue);
  return (
    <div className="flex flex-col">
      <div dangerouslySetInnerHTML={{ __html: marked(value) }} className="content textarea textarea-bordered mb-4"/>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="textarea textarea-bordered mb-2 w-full h-fit"
      />
    </div>
  );
}
