import React,{useContext} from "react";
import NoteItems from "./NoteItems";
import noteContext from "../context/notes/noteContext";

const Notes = ()=>{

  const a = useContext(noteContext);
  const {notes, setNotes} = useContext(noteContext);
  return (
    <div className="row">
      <h2>Your Notes</h2>
      <hr/>
      {notes.map((note) => {
        return <NoteItems note={note}/> ;
      })}
      
    </div>
  );
};

export default Notes;
