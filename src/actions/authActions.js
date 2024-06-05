'use server';
import { signIn, signOut } from '@/auth/auth';

export const githubLoginHandler = async (previousState, formData) => {
  try {
    await signIn('github', { redirect: true, redirectTo: '/admin' });
  } catch (error) {
    throw error;
  }
};

export const logOutHandler = async () => {
  await signOut({ redirectTo: '/login' });
};

export const credentialLoginHandler = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  if (!username || !password) {
    return { error: 'تمامی فیلد ها را پر کنید' };
  }
  try {
    await signIn('credentials', { username, password });
  } catch (error) {
    console.log(error)
    return { error: `${error}` };
  }
};
