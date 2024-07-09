import connectDb from '@/lib/connectDb';
import { User } from '@/models/User';
import { connect } from 'mongoose';
import { NextResponse } from 'next/server';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // For Github Login Need to save UserIsAdmin
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        if (!user?.isAdmin) {
          if (account.provider === 'github') {
            await connectDb();
            const foundUser = await User.findOne({ email: profile.email });
            token.isAdmin = foundUser.isAdmin;
            token.id = foundUser.id;
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
        return session;
      }
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPage = request.nextUrl.pathname.startsWith('/admin');
      const isOnLoginPage = request.nextUrl.pathname.startsWith('/login');
      const isOnRegisterPage = request.nextUrl.pathname.startsWith('/register');
      //Only Admin Can Reach Admin Dashboard
      if (isOnAdminPage && !user?.isAdmin) {
        return false;
      }

      //Only UnAuthenticated Users Can Reach Login Page
      //return to HomePage
      if (isOnLoginPage && user) {
        return NextResponse.rewrite(new URL('/', request.url));
      }
      //Authenticated Users Cant Reach Register Page
      if (isOnRegisterPage && user) {
        return false;
      }
      return true;
    },
  },
};
