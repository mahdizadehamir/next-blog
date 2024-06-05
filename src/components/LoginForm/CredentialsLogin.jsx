'use client';
import { useFormState } from 'react-dom';
import { credentialLoginHandler } from '@/actions/authActions';
import SubmitButton from './GithubSubmitButton';


function CredentialsLogin() {
  const [state, formAction] = useFormState(credentialLoginHandler, undefined);  
  return (
    <form className="flex flex-col text-black items-center gap-3" action={formAction}>
      <input className="p-2 rounded-lg" type="text" name="username" placeholder="نام کاربری" />
      <input className="p-2 rounded-lg" type="password" name="password" placeholder="رمز عبور" />
      <span className="text-red-500">{state?.error}</span>
      <SubmitButton ButtonLabel={'ورود'} />
    </form>
  );
}

export default CredentialsLogin;
