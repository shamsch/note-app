import { useState } from 'react'

export default function NoteForm() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title,note)
  }

  return (
    <>
      <h3>Add a note</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input 
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)} 
            value={title} 
          />
        </label>
        <label>
          <span>Note:</span>
          <textarea
            required
            onChange={(e) => setNote(e.target.value)} 
            value={note} 
          />
        </label>
        <button>Add note</button>
      </form>
    </>
  )
}