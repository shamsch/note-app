// components
import NoteForm from './NoteForm'

import { useState } from 'react'
import {useAuthContext} from '../../hooks/useAuthContext'

export default function Home() {
  const [showAdd, setShowAdd]=useState(false);
  const {user}= useAuthContext()

  return (
    <div>
      <NoteForm show={showAdd} setShowAdd={setShowAdd} uid={user.uid}/>
      <div>
        {user.uid}
      </div>
      {!showAdd && <button className='add-btn' onClick={()=>setShowAdd(true)}>Add note</button>}
    </div>
  )
}