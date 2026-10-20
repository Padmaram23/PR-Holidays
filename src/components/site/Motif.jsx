import React from 'react';

export default function Motif({ className = '' }) {
  return (
    <svg
      viewBox="0 0 160 20"
      role="presentation"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 10h56" strokeOpacity="0.45" />
      <path d="M104 10h56" strokeOpacity="0.45" />
      <path d="M80 2.5 93 10 80 17.5 67 10Z" strokeOpacity="0.75" />
      <path d="M80 6.5 86.5 10 80 13.5 73.5 10Z" strokeOpacity="0.45" />
      <circle cx="60" cy="10" r="1.2" fill="currentColor" stroke="none" fillOpacity="0.7" />
      <circle cx="100" cy="10" r="1.2" fill="currentColor" stroke="none" fillOpacity="0.7" />
    </svg>
  );
}