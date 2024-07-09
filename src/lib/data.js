import { Post } from '@/models/Post';
import { User } from '@/models/User';
import connectDb from './connectDb';
import { unstable_noStore as noStore } from 'next/cache';
// const posts = [
//   { id: 1, title: 'عنوان اول', body: 'توضیحاتتتت ......۱', userId: 1 },
//   { id: 2, title: 'عنوان دوم', body: 'توضیحاتتتت .....۲۱', userId: 2 },
//   { id: 3, title: 'عنوان سوم', body: 'توضیحاتتتت ......۳۱', userId: 3 },
// ];
// const users = [
//   { id: 1, name: 'یوزر اول' },
//   { id: 2, name: 'یوزر دوم' },
// ];
export const getPosts = async () => {
  try {
    await connectDb();
    const posts = await Post.find({}).sort({ updatedAt: -1 });
    return posts;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPost = async (slug) => {
  try {
    await connectDb();
    const posts = await Post.findOne({ slug: slug });
    return posts;
  } catch (error) {
    throw new Error('failed to fetch post');
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    await connectDb();
    const user = await User.findOne({ _id: id });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
export const getUsers = async () => {
  try {
    await connectDb();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error('failed to fetch users');
  }
};
