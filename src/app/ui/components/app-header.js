import React from 'react';

export const AppHeader = (props) => (
  <header className="text-center py-10">
    <svg width={184} height={118} viewBox="0 0 184 118" fill="none" className="mx-auto" {...props}>
      <path
        d="M128.902 111.238C167.335 109.165 184 70.665 184 52.745 184 31.027 173.116 0 128.902 0 70.947 0 45.575 31.782 40.133 47.673L0 31.444 22.447 118l27.55-33.473c11.676 9.693 43.806 28.604 78.905 26.711z"
        fill="#F9A08D"
      />
      <circle cx={140} cy={30} r={14} fill="#F8F7F8" />
      <circle cx={139.5} cy={29.5} r={7.5} fill="#4D4D4D" />
    </svg>
    <h1 className="heading-1 text-blue-m">Dessert Before Dinner </h1>
  </header>
);
