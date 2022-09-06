import React, { useState, useReducer } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {
  console.log(state);
  if (action.type === "NEW_PERSON") {
   
    const newPeople = [...state.people, action.payload]
    return {...state, isModalOpen:true, people:newPeople, modalContent:'person successfully added!'}
  }
  if (action.type === "NO_VALUE"){
    return {...state, isModalOpen:true, modalContent:'Empty input please add a value!'}
  }
  if (action.type === "CLOSE_MODAL") {
    return {...state, isModalOpen:false}
  }
  if (action.type === "REMOVE_PERSON") {

    const filteredArray = state.people.filter((person) => person.id !== action.payload)
    return {...state, people:filteredArray}
  }
  return state;
};

const defaultState = {
  isModalOpen: false,
  people: [],
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log(state.people);
  const addPerson = (e) => {
    e.preventDefault();

    if (name) {
      const newPerson = { name, id: Math.random() };

      dispatch({ type: "NEW_PERSON", payload: newPerson });
      setName("");
    }
    else{
      dispatch({type:'NO_VALUE'})
    }


  };

    const closeModal = () => {
      dispatch({ type: "CLOSE_MODAL" });
    };

  return (
    <div className="maindiv">
      <div>
        <h1>Use Reducer</h1>
        {state.isModalOpen && 
          <Modal closeModal={closeModal} modalContent={state.modalContent} />
        }
        <form onSubmit={addPerson}>
          <input
            type="text"
            name=""
            onChange={(e) => setName(e.target.value)}
            value={name}
            id=""
          />
          <button>submit</button>
        </form>

        {
          state.people.map((person) => {
            return (
              <div key={person.id}>
                <h4>{person.name}</h4>
                <button onClick={() => dispatch({type:'REMOVE_PERSON', payload:person.id})}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Index;
