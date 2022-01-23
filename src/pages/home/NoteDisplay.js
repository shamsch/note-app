import styles from "./NoteDisplay.module.css";
import { useFirestore } from "../../hooks/useFirestore";

//fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function NoteDisplay({ notes }) {
  const { deleteDocument } = useFirestore("notes");

  return (
    <ul>
      {notes.map((note) => {
        return (
          <li key={note.id} className={styles.container}>
            <div className={styles.content}>
              <button
                onClick={() => {
                  deleteDocument(note.id);
                }}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              <h3>{note.title}</h3>
              <p>{note.note}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
