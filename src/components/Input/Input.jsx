//import React from "react";
import css from './Input.module.css';

const Input = (prop) => {
  return <input className={css.input} {...prop}></input>;
};

export default Input;
