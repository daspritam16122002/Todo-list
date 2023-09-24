import React,{useState} from 'react'

const Todoform = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        if (value) {
            // add todo
            addTodo(value);
            // clear form after submission
            setValue('');
          }

        // setValue("") //set the value to empty string
    };
  return (
    <form className='TodoForm' onSubmit={handleSubmit} > 
        <input type="text" className="todo-input" value={value} placeholder="Your task?" onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>➕</button>
    </form>
  )
}

export default Todoform