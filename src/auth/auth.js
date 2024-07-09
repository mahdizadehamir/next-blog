import connectDb from '@/lib/connectDb';
import { User } from '@/models/User';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { comparePassword } from '@/utils/functions';
import { authConfig } from './auth.config';

const login = async (credentials) => {
  const { username, password } = credentials;
  let user = null;
  try {
    await connectDb();
    user = await User.findOne({ username: username });
    if (!user) {
      throw new Error('user not found');
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new Error('پسورد اشتباه است');
    }
    return user;
  } catch (error) {
    throw new Error('failed to logged in');
  }
};
export const config = {
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === 'github') {
        try {
          await connectDb();

          const user = await User.findOne({ email: profile.email });
          //existing user
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });
            await newUser.save();
            console.log('user created');
          }
          //new user
        } catch (error) {
          console.log(error);
          return false;
        }
        return true;
      }
    },

    ...authConfig.callbacks,
  },
};
export const { auth, signIn, signOut, handlers } = NextAuth(config);
