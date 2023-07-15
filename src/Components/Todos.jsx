import React from "react";

import Todo from "./Todo";
import style from './todos.module.css'

const Todos = (props)=>{
    return(
        <div className={style.background}>
            {
                props.Todos.map((item, index)=>(
                    <Todo todo = {item.childData} key = {index} id = {item.id} onRemoveTodo={props.onRemoveTodo}/>
                ))
            }
        </div>
    );
};

export default Todos;