// styles
import styles from './Home.module.css'

// components
import NoteForm from './NoteForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        transaction list
      </div>
      <div className={styles.sidebar}>
        <NoteForm />
      </div>
    </div>
  )
}