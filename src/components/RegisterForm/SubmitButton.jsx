'use client';
import { useFormStatus } from 'react-dom';
import Spinner from '../Spinner/Spinner';
function SubmitButton({ buttonLabel }) {
  const { pending } = useFormStatus();
  return pending ? (
    <Spinner />
  ) : (
    <button className="font-bold text-xl p-3 bg-blue-500 rounded-lg">{buttonLabel}</button>
  );
}

export default SubmitButton;
