import styles from "./NoteDisplay.module.css";

export default function NoteDisplay({ notes }) {
  return (
    <ul>
      {notes.map((note) => {
        return (
          <li key={note.id} className={styles.container}>
            <div className={styles.content}>
              <h3>{note.title}</h3>
              <p>{note.note}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
