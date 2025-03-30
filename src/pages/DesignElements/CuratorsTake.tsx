import React, { PropsWithChildren } from 'react';

export default function CuratorsTake({ children }: PropsWithChildren) {
  return (
    <>
      <h3>Curator's Take</h3>
      {children}
    </>
  );
}
