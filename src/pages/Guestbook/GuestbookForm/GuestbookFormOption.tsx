import React from 'react';

export interface GuestbookFormOptionProps {
  option: string;
  value: number;
  isActive: boolean;
  disabled: boolean;
  onClick: () => void;
}

export default function GuestbookFormOption({ option, value, isActive, disabled, onClick }: GuestbookFormOptionProps) {
  return (
    <div
      className={`${option} ${option}-${value} option ${isActive && 'active'}`}
      onClick={() => !disabled && onClick()}
    ></div>
  )
}
