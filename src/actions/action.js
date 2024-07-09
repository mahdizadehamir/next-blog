'use server';
import connectDb from '@/lib/connectDb';
import { Post } from '@/models/Post';
import { User } from '@/models/User';
import { hashPassword } from '@/utils/functions';
import { revalidatePath } from 'next/cache';

const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData.entries());
  console.log(title, desc, slug, userId, img);
  try {
    await connectDb();
    const newPost = await new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await newPost.save();
    console.log('saved to db');
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    return { error: 'something went wrong' };
  }
};
const deletePost = async (prevState, formData) => {
  const { postId } = Object.fromEntries(formData.entries());
  try {
    await connectDb();
    await Post.findByIdAndDelete(postId);
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    return { error: 'something went wrong in deleting post' };
  }
};

const deleteUser = async (prevState, formData) => {
  const { userId } = Object.fromEntries(formData.entries());
  try {
    await connectDb();
    await Post.deleteMany({ userId: userId });
    await User.findByIdAndDelete(userId);
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    return { error: 'something went wrong in deleting post' };
  }
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
export { addPost, addUser, deletePost, deleteUser };
