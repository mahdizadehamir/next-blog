'use server';
import connectDb from '@/lib/connectDb';
import { User } from '@/models/User';
import { hashPassword } from '@/utils/functions';

const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData.entries());
  console.log(title, desc, slug, userId);
};
const addUser = async (previousState, formData) => {
  const { username, email, password, confirmPassword } = Object.fromEntries(formData);
  await connectDb();
  //check for null values
  if (!username || !email || !password || !confirmPassword) {
    return { error: 'تمامی فیلد ها را پر کنید' };
  }
  //if user exist

  const [userByEmail, userByUsername] = await Promise.all([
    User.findOne({ email }),
    User.findOneAndDelete({ username }),
  ]);
  const user = userByEmail || userByUsername;
  if (user) {
    return { error: 'ایمیل یا نام کاربری تکراری است' };
  }

  //check password
  if (password !== confirmPassword) {
    return { error: 'پسوردها با هم یکسان نیستند' };
  }
  //new user
  const hashedPassword = await hashPassword(password);
  const newUser = await new User({
    username,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  return { success: 'یوزر ایجاد شد' };
};
export { addPost, addUser };
