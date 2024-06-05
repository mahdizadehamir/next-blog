'use client';
import { useFormStatus } from 'react-dom';
function SubmitButton() {
  const status = useFormStatus();
  return (
    <button className="font-bold text-xl p-3 bg-blue-500 rounded-lg" disabled={status.pending}>
      ثبت نام
    </button>
  );
}

export default SubmitButton;
