/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
import './App.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; //Import CSS
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import storage from './util/storage'

function App() {
  const [TODOList, setTODOList] = useState(storage.get());

  // Xử lý item hoàn thành
  const handleToggle = (id) => {
    let mapper = TODOList.map((item) => {
      return item.id === Number(id)
        ? { ...item, complete: !item.complete }
        : { ...item };
    });
    setTODOList(mapper);
    storage.set(mapper);
  };

  // Lọc ra những item hoàn thành để xóa
  const handleFilter = () => {
    let notComplete = [];
    TODOList.filter((item) => {
      if(item.complete){
        notComplete.push(item.complete);
      }
    })
    let filtered = TODOList.filter((item) => {
      return !item.complete;
    });
    setTODOList(filtered);
    storage.set(filtered);
  };

  // Thêm item
  const addItem = (task, due) => {
    let todos = [...TODOList];
    todos = [
      ...todos,
      { id: TODOList.length + 1, item: task, complete: false, dateOf: due},
    ];
    setTODOList(todos);
    storage.set(todos);
  };

  // Xóa item
  const onDeleteClick = (id)=>{
    let removeItem = TODOList.filter(todo => todo.id != id);
    setTODOList(removeItem);
    storage.set(removeItem);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-h1"> TODO APP </h1>
        <div>
          <TodoForm addItem={addItem}/>
          <TodoList
            TODOList={TODOList}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
            onDeleteClick={onDeleteClick}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
