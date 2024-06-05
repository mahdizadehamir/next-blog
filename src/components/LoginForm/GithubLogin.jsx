'use client';
import { useFormState } from 'react-dom';
import { githubLoginHandler } from '@/actions/authActions';
import SubmitButton from './GithubSubmitButton';
function GithubLogin() {
  const [state, formAction] = useFormState(githubLoginHandler, null);
  return (
    <form action={formAction}>
      {/* <button type="submit" className="p-3 bg-blue-500 rounded-lg">
        Sing In With Github
      </button> */}
      <SubmitButton ButtonLabel={'ورود با گیت هاب'}/>
      <span>{state?.error}</span>
    </form>
  );
}

export default GithubLogin;
