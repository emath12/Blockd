import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  text: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, children, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      className="bg-sky-500 m-3 pr-4 pl-4 pt-3 pb-3 border-solid border-2 border-white text-white hover:bg-sky-600 shadow-md shadow-black rounded-full active:bg-sky-950 focus:border-3"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
