import React, { useContext } from "react";
import Notes from "./Notes"
import noteContext from "../context/notes/noteContext";


const Home = () => {
  const a = useContext(noteContext); 
  return (
    <>
      <div
        className="container border border-grey rounded mt-3"

      >
        <div className="m-3">
          <h1 className={`text-${a.mode === "dark" ? "light" : "dark"}`}>
            Add a Note
          </h1>

          <label for="exampleFormControlInput1" class="form-label"></label>
          <input
            type="email"
            class={`form-control shadow-none bg-${a.mode} text-${a.mode === "dark" ? "light" : "dark"}`}
            id="exampleFormControlInput1"
            placeholder="Enter Title here"
          />

          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class={`form-control shadow-none bg-${a.mode} text-${a.mode === "dark" ? "light" : "dark"}`}
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter description here"
          ></textarea>

          <button
            type="submit"
            className={`btn mt-3  btn-${
              a.mode === "dark" ? "light" : "dark"
            } shadow-none`}
          >
            Add Note
          </button>
        </div>
      </div>
      <hr/>
      <Notes/>
    </>
  );
};

export default Home;

