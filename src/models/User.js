import { Schema, model, models } from 'mongoose';
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
    },
    email: {
      type: String,
      unique: true,
      max: 50,
      required: true,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);
//check if user model exist
export const User = models?.User || model('User', userSchema);
