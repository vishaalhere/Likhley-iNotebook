import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    //DARK MODE
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "black";
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
      }
      return mode;
    }

    //FETCHING NOTES
    const notesInitial = [{
        "_id": "61b3bf7c778b413490894f87",
        "user": "61b3bf26778b413490894f80",
        "title": "Vishaal's Note",
        "description": "Hello this is Vishaal",
        "tag": "Made by Vishaal",
        "date": "2021-12-10T20:58:36.066Z",
        "__v": 0
      },
      {
        "_id": "61b3c08fc98883a5f4796177",
        "user": "61b3bf26778b413490894f80",
        "title": "Vishaal's Note 2",
        "description": "Hello this is Vishaal",
        "tag": "Made by Vishaal",
        "date": "2021-12-10T21:03:11.054Z",
        "__v": 0
      },
      {
        "_id": "61b5115b6fcbe540d02227f8",
        "user": "61b3bf26778b413490894f80",
        "title": "Vishaal's Note 3",
        "description": "Hello this is Vishaal",
        "tag": "Made by Vishaal",
        "date": "2021-12-11T21:00:11.953Z",
        "__v": 0
      },
      {
        "_id": "61b5115b6fcbe540d02227f8",
        "user": "61b3bf26778b413490894f80",
        "title": "Vishaal's Note 3",
        "description": "Hello this is Vishaal",
        "tag": "Made by Vishaal",
        "date": "2021-12-11T21:00:11.953Z",
        "__v": 0
      },
      {
        "_id": "61b5115b6fcbe540d02227f8",
        "user": "61b3bf26778b413490894f80",
        "title": "Vishaal's Note 3",
        "description": "Hello this is Vishaal",
        "tag": "Made by Vishaal",
        "date": "2021-12-11T21:00:11.953Z",
        "__v": 0
      }
    ];
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{toggleMode, mode, notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
    }

export default NoteState;

// const s1 = {
    //     "name": "Harry",
    //     "class": "5b"
    // }
    // const [state, setState] = useState(s1);

    // const update = ()=>{
    //     setTimeout(() => {
    //         setState({
    //             "name": "Larry",
    //             "class": "10b"
    //         })
    //     }, 1000);