import "./write.css";

import { useState } from "react";
import db from "./fb";
import {set , ref } from "firebase/database";
import { uid } from "uid";


export default function Write() {
    const [task , setTask] =useState("");

	const hTask = (event) => {
		setTask(event.target.value);
		}

	const save = (event) =>{
		event.preventDefault();
		const uuid = uid();
		console.log(uuid);
		const data = {task , uuid}
		const r = ref(db , "task/" + uuid)
		set(r ,data);
		alert("task saved");
		setTask("");
	}

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit = {save}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text" onChange = {hTask} value = {task}
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}