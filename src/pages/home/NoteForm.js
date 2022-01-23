import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import styles from "./NoteForm.module.css";

export default function NoteForm({ show, setShowAdd, uid }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const { addDocument } = useFirestore("notes");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ title, note, uid });
    setTitle("")
    setNote("")
    setShowAdd(false);
  };

 

  return (
    <div className={`${show ? styles.showModal : ""} ${styles.modal}`}>
      <div className={styles.modalContent}>
        <form onSubmit={handleSubmit}>
          <span
            className={styles.closeBtn}
            onClick={() => {
              setShowAdd(false);
            }}
          >
            ×
          </span>
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
      </div>
    </div>
  );
}
