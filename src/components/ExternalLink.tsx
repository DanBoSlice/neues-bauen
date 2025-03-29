import { PropsWithChildren } from 'react';

export interface ExternalLinkProps extends PropsWithChildren {
  href: string;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
