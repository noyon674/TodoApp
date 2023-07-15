import React, { useState } from "react";

import style from './newTodo.module.css';

const NewTodo = (props)=>{ 

    const [todo, setTodo] = useState({title: '', desc: ''});
    const {title, desc} = todo;

    const handleChange =(e)=>{
        const name = e.target.name;
        setTodo({...todo, [name]: e.target.value});
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        props.onAdd(todo);
        setTodo({title:'', desc:''});
    }
    return(
        <div className={style.background}>
            <form onSubmit={handleSubmit}>
                <div className={style.div}>
                    <label htmlFor="title">Title: </label>
                    <input 
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    />
                    
                </div>
                <div>
                    <label htmlFor="title">Description: </label>
                    <textarea 
                    type="text"
                    id="desc"
                    name="desc"
                    value={desc}
                    onChange={handleChange}
                    />
                </div>
                <button className={style.btn} type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodo;