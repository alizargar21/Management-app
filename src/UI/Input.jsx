import React from "react";

const Input = (props) => {
  const element =
    props.element === "input" ? (
      <input type={props.type} placeholder={props.placeholder} id={props.id} />
    ) : (
      <textarea id={id} rows={props.rows || 3}/>
    );
  return <div className={`form-control`}>{element}</div>;
};

export default Input;
