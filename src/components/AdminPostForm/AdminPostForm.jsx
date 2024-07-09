'use client';
import { addPost } from '@/actions/action';
import { useFormState } from 'react-dom';
import Uploader from '../ImageUploader/uploader';
function AdminPostForm({ userId }) {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className='text-black'>
      <input type="text" placeholder="title" name="title" />
      <textarea type="text" name="desc" placeholder="description" rows={10} />
      <input type="text" placeholder="slugs" name="slug" />
      <input type="hidden" name="userId" value={userId} />
      {/* <input type="text" placeholder="img" name="img"  /> */}
      <Uploader inputName='img' />
      <button className='bg-blue-600 p-3'>Add</button>
      {state?.error}
    </form>
  );
}

export default AdminPostForm;
