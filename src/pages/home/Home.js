// components
import NoteForm from "./NoteForm";
import NoteDisplay from "./NoteDisplay";
//hooks
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

//fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  const [showAdd, setShowAdd] = useState(false);
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "notes",
   ['uid', '==', user.uid],
   ["createdAt", "desc"]);
  return (
    <div>
      <NoteForm show={showAdd} setShowAdd={setShowAdd} uid={user.uid} />
      {error && <p>{error}</p>}
      {document && <NoteDisplay notes={documents} />}
      {!showAdd && (
        <a className="fixed-btn" href>
          <div className="add-btn" onClick={() => setShowAdd(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </a>
      )}
    </div>
  );
}
