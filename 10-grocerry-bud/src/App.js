import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list)
  }
  else {
    return []
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "pleaser enter a value", "danger")
      console.log("Empty")
    }
    else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "item successfully changed", "success");
    }
    else {
      showAlert(true, "item added to the list", "success")
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  }

  const showAlert = (show = false, msg = '', type = '',) => {
    setAlert({ show, msg, type });
  }

  const clearList = () => {
    showAlert(true, "List items cleared", "danger");
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, "item removed", "danger");
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);

  }



  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. milk"
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <button type="submit" className="submit-btn">{isEditing ? "Edit" : "Submit"} </button>
        </div>
      </form>
      {list.length > 0 && (<div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={clearList}>clear List</button>
      </div>)
      }

    </section >
  );
}
export default App;