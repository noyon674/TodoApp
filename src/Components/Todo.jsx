import React from "react";

import style from './todo.module.css';

const Todo = (props)=>{
    const {title, desc} = props.todo;

    const pickId = (id)=>{
        props.onRemoveTodo(id);
    };
    return(
        <div className={style.background}>
            <div>
                <h3>{title}</h3>
                <hr />
                <p>{desc}</p>
            </div>
            <div>
                <button className={style.btn} onClick={()=>{pickId(props.id)}}>
                   <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default Todo;