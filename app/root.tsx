import type { MetaFunction, LinksFunction, ErrorBoundaryComponent } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import tailwind from './styles/tailwind.css';
import styles from './styles/app.css';
import CenterCardLayout from './components/CenterCardLayout';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: '역량 배지',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwind },
  { rel: 'stylesheet', href: styles }
];

export default function App() {
  return (
    <html lang="ko" data-theme="emerald">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = function({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>역량뱃지</title>
        <Meta />
        <Links />
      </head>
      <body>
        <CenterCardLayout>
          <a
            href="https://github.com/twinstae/skill-badge/issues/new/choose"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            개발자에게 이슈 남기기
          </a>
          <h1>Error</h1>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <div>{error.stack}</div>
        </CenterCardLayout>
        <Scripts />
      </body>
    </html>
  );
}