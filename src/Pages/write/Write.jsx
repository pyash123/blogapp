import { useState } from "react";
import React from "react";
import "./write.css";

export default function Write() {
  
  
     const[inputList ,setInputList ] =useState("");
      const[items ,setItems ] =useState([]);

      const itemEvent = (event) => {
      setInputList(event.target.value);
      }


      const listOfItems = (event) => {
         
        setItems([...items , inputList]);
        setInputList('');




    }
    return (
      <div className="write">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <form className="writeForm">
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
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"  value = {inputList} onChange = {itemEvent} 
              autoFocus={true}
            />
          </div>
          <button className="writeSubmit" type="submit" onClick={listOfItems}>
            Publish
          </button>
        </form>
      </div>
    );
  }