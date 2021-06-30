import React from "react";
import { useState } from "react";
import List from "./List";

const App = () => {
  const [listOfItems, setListOfItems] = useState("");
  const [Items, setItems] = useState([]);

  const itemList = (event) => {
    setListOfItems(event.target.value);
  };

  const addItems = () => {
    setItems((olditems) => {
      return [...olditems, listOfItems];
    });
    setListOfItems("");
  };
  const deleteItems = (id) => {
    console.log("deleted");
    setItems((olditems) => {
      return olditems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add new item"
            value={listOfItems}
            onChange={itemList}
          />
          <button onClick={addItems}> + </button>
          <ol>
            {Items.map((itemval, index) => {
              return (
                <List
                  key={index}
                  text={itemval}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
