import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

import Todos from "./Todos";
import style from './home.module.css';
import NewTodo from "./NewTodo";

const Home = ()=>{
    const [Todo, setTodo] = useState([]);

    const handleAddTodo = (childData)=>{
        setTodo(()=>{
            return [...Todo, {id: uuidv4(), childData}]
        });
    };
    const removeTodo =(id)=>{

        setTodo((Todo)=>{
            const filterTodo = Todo.filter((item)=>(item.id !== id));
            return filterTodo;
        });
    }
    return(
        <div className={style.background}>
            <h1 style={{textAlign:'center', padding:'10px 0'}}>Todo App</h1>
            <NewTodo onAdd = {handleAddTodo}/>
            <Todos Todos = {Todo} onRemoveTodo = {removeTodo}/>
        </div>
    );
};

export default Home;