import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/shared/Spinner';

import Page from './routes/skills/$slug';
import './tailwind.css';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner message="로딩 중" />}>
      <Page />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
