import React from 'react';
import NavigationBar from './NavigationBar';

export default function CenterCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row justify-center">
      <div className="static flex flex-col rounded-xl m-2 shadow-xl max-w-xl w-full">
        <NavigationBar />
        <main className="h-full w-full p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
