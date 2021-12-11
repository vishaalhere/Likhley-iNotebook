import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItems = (props) => {
  const a = useContext(noteContext);
  const { notes, setNotes } = useContext(noteContext);
  return (
    <>
      <div className="col-md-3">
        <div class="card my-3">
          <div class="card-body">
            <h5 class="card-title">{props.note.title}</h5>
            <p class="card-text">{props.note.description}</p>

            <button id="${i}" onclick="deleteNote(this.id)" class="btn btn-dark ">
              Delete
            </button>
            <button
              id="${i}"
              onclick="important(this.id)"
              class="btn btn-dark mx-2"
            >
              Important
            </button>
          </div>
        </div>
        </div>  
    </>
  );
};

export default NoteItems;
