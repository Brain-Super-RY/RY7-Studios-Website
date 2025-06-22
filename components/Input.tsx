'use client'

import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ id, label, type = 'text', ...props }, ref) => {
  return (
    <div className="relative">
      <input
        ref={ref}
        id={id}
        type={type}
        className="block w-full px-4 py-3 bg-transparent rounded-lg border-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer text-white"
        placeholder=" " // The space is crucial for the peer-placeholder-shown to work
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute text-md text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
      >
        {label}
      </label>
    </div>
  );
});

Input.displayName = 'Input';

export default Input; 