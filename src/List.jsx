import React from "react";

const List = (props) => {
 
  return (
    <>
      <div className="todo_style">
        <i className="fas fa-times"
        onClick={()=>{
           return props.onSelect(props.id)
        }}></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default List;
