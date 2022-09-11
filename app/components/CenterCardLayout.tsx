import clsx from 'clsx';
import React from 'react';
import NavigationBar from './NavigationBar';

export default function CenterCardLayout({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex flex-row justify-center">
      <div className="static flex flex-col rounded-xl m-2 shadow-2xl max-w-xl w-full">
        <NavigationBar />
        <main id="main" className={clsx("h-full w-full p-4", className)}>
          {children}
        </main>
      </div>
    </div>
  );
}
