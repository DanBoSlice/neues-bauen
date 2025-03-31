import { PropsWithChildren } from 'react';

export default function CuratorsTake({ children }: PropsWithChildren) {
  return (
    <>
      <hr />

      <div>
        <h2>Curator's Take</h2>

        {children}
      </div>
    </>
  )
}
