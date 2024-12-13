import React from 'react'
import { removeUser } from '@/utils/actions';

export default function DeleteButton({id} : {id: string}) {
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      <input type='hidden' name='id' value={id} />
      <button
        type='submit'
        className='bg-red-500 text-white text-xs rounded p-2'
      >
        delete
      </button>
    </form>
  )
}
