import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");






  useEffect(() => {
    const storedData = localStorage.getItem("tasks");
    if (storedData) {
      setTodos(JSON.parse(storedData));
    }
  }, []);


// بصير اشي غريب هون
//   function displayButtonDelete(){
//     const hasData = todos.length>0
//     document.getElementById("deleteAll").style.display = hasData ? "block" : "none";
// }

// displayButtonDelete()



  /*
  1-امنع السلوك الافتراضي
  2- افحص اذا كان في قيمة
  3-اعمل اوبجيكت جديد 
  4- غير قيمة الستيت مع القيمة الجديدة باستخدام ... ء
  5- خزن الجديد باللوكل ستوريج
  6-خلي قيمة الانبوت فاضية
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      const newTask = { todo: input, isChecked: false };
      setTodos([...todos, newTask]);
      updateLocalStorage([...todos, newTask]);
      setInput("");
    }
  };


/*


*/


  const editTask = (index, newText) => {
    
    const updatedTodos = [...todos];
    updatedTodos[index].todo = newText;
    setTodos(updatedTodos);
    updateLocalStorage(updatedTodos);
  
  };




  const toggleCheckbox = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isChecked = !updatedTodos[index].isChecked;
    setTodos(updatedTodos);
    updateLocalStorage(updatedTodos);
  };


/*



*/



  const deleteTask = (index) => {
    const updatedTodos = todos.filter((todos, i) => i !== index);
    setTodos(updatedTodos);
    updateLocalStorage(updatedTodos);
  };





  const updateLocalStorage = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };





//كنت بدي انه اذا فش مهام ما تظهر البتن بعدها... شوف المشكلة بعدين
const deleteAll = () => {
  const updatedTodos = []
  setTodos(updatedTodos);
  updateLocalStorage(updatedTodos);
}

return (
    <div className="todo-container">
      <h1>
        <span className="second-title">Todo List App</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="add-task"
          type="text"
          placeholder="Add new task ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <button id="deleteAll" onClick={deleteAll} className="add-button">
          delete All
        </button>
      {todos.map((task, index) => (
        
        <Todo
          key={index}
          task={task}
          onEdit={(newText) => editTask(index, newText)}
          onToggleCheckbox={() => toggleCheckbox(index)}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </div>
  );
}

export default App;
/**
 * 
 * 
 * 
 * 
 * لولا الامتحانات رح تشوف اشي احلى
 * 
 * 
 * 
 */