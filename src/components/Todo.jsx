import React,{useState} from 'react';
import './Todo.css'

const Todo = () => {
    const [input,setInput] = React.useState("");
    const [todo, setTodo] = React.useState([]);

    const editList = (index) => {
        const data = todo[index];
        setTodo((old) => [
          ...old.slice(0, index),
          ...old.slice(index + 1, old.length)
        ]);
        setInput(data);
    };

    const deleteList = (index) => {
        setTodo((old) => [
          ...old.slice(0, index),
          ...old.slice(index + 1, old.length)
        ]);
    };


    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo((old) => [...old, input]);
        setInput("");
    };
    
  return (
    <>
        <div className="container">
        <h1>Add your todo's</h1>
        <br />
        <form action="" onSubmit={handleSubmit}>
            <input className='searchbar'
            type="text" 
            placeholder='Add your todo...!'
            value={input}
            onChange={(e)=>handleChange(e)}
            /> &nbsp;
            <button className='btn1'>Add todo</button>
        </form>
        {todo.reverse().map((todo, index) => {
        return (
          <div key={index}>
              <br />
            <span className='todo'>{todo}</span> &nbsp;
            <button className="btn2" onClick={() => editList(index)}>Edit</button>&nbsp;
            <button className="btn3" onClick={() => deleteList(index)}>Delete</button>
          </div>
        );
        })}
        </div>
    
    
    </>
  )
}

export default Todo