'use client';
import { useFormState } from 'react-dom';
import { addUser } from '@/actions/action';
import SubmitButton from './SubmitButton';

function RegisterForm() {
  const [state, formAction] = useFormState(addUser, undefined);
  if (state?.success) {
    return (
      <div className="bg-slate-900  container md:w-1/2 mx-auto py-10 rounded-xl shadow-lg">
        <span className="text-green-500">{state?.success}</span>
      </div>
    );
  }
  return (
    <div className="bg-slate-900  container md:w-1/2 mx-auto py-10 rounded-xl shadow-lg">
      <form className="flex flex-col text-center items-center gap-8 " action={formAction}>
        <input
          className="p-2 rounded-lg border-none text-gray-600"
          type="text"
          placeholder="نام کاربری"
          name="username"
        />
        <input
          className="p-2 rounded-lg border-none text-gray-600"
          type="email"
          placeholder="ایمیل"
          name="email"
        />
        <input
          className="p-2 rounded-lg border-none text-gray-600"
          type="password"
          placeholder="پسورد"
          name="password"
        />
        <input
          className="p-2 rounded-lg border-none text-gray-600"
          type="password"
          placeholder="تکرار پسورد"
          name="confirmPassword"
        />
        <span className="text-red-500">{state?.error}</span>
        <SubmitButton buttonLabel={'ثبت نام'} />
      </form>
    </div>
  );
}

export default RegisterForm;
