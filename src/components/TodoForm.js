import React, { useState } from 'react';


const TodoForm = ({addItem}) => {
    const [ userInput, setUserInput] = useState('');
    const [userDue, setUserDue] = useState('');

    const handleAddInputChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleChangeDate = (e) => {
        setUserDue(e.currentTarget.value)
    }
    const handleAddFormSubmit = (e) => {
        e.preventDefault();
        if(userInput && userDue){
            addItem(userInput, userDue);
            setUserDue("");
            setUserInput("");
        }
    }

    return (
        <form className="form" onSubmit={handleAddFormSubmit}>
            <button>+</button>
            
            <input value={userInput} type="text" onChange={handleAddInputChange} 
                placeholder="Take a note..." id="task" className="input" required/>

            <div>
            <input value={userDue} type="date" onChange={handleChangeDate} 
                name="due" id="due" className="input" required/>
            </div>
        </form>
    );
};

export default TodoForm;
