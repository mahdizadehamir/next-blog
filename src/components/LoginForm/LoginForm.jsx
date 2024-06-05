import GithubLogin from './GithubLogin';
import CredentialsLogin from './CredentialsLogin';
function LoginForm() {
  return (
    <div className="wrapper flex flex-col items-center gap-10 bg-slate-900 container md:w-1/2 mx-auto py-10 rounded-xl shadow-lg">
      <GithubLogin />
      <CredentialsLogin />
    </div>
  );
}

export default LoginForm;
