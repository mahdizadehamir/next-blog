import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: {
    default: 'Next Blog',
    template: '%s | Next Blog',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className='container bg-slate-600 text-white mx-auto p-2 my-0 h-screen flex flex-col justify-between'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
