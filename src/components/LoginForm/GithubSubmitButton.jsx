'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import Spinner from '../Spinner/Spinner';
function SubmitButton({ ButtonLabel }) {
  const { pending } = useFormStatus();
  return pending ? (
    <Spinner />
  ) : (
    <button
      disabled={pending}
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
    {ButtonLabel}
    </button>
  );
}

export default SubmitButton;
