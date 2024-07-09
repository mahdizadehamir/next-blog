import { compare, hash } from 'bcryptjs';

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};
const comparePassword = async (password, hashedPassword) => {
  const isMatch = compare(password, hashedPassword);
  return isMatch;
};



export { comparePassword, hashPassword };
