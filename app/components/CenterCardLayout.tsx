import React from 'react';

export default function CenterCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row justify-center">
      <div className="p-4 m-4 rounded-xl shadow-xl max-w-2xl">{children}</div>
    </main>
  );
}
