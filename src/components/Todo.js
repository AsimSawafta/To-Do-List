import React, { useState } from "react";

function Todo({ task, onEdit, onDelete, onToggleCheckbox }) {



  //
//
///
//
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.todo);



//
  const handleEditClick = () => {
    setIsEditing(true);
  };

//
  
  const handleSaveClick = () => {
    if(editedText)
    onEdit(editedText);

    
    setIsEditing(false);
    

  };
  

  return (
    <div className="todo">
      <div className="todo-text">
        <input
          className="checkbox"
          type="checkbox"
          id="isCompleted"
          checked={task.isChecked}
          onChange={onToggleCheckbox}
        />
      </div>
      <div>
        {isEditing ? (
         
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          
          task.todo
        )}
      </div>
      <div className="todo-actions">
        {isEditing ? (
          
          <button className="submit-edits" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          
          <button id="edit" className="submit-edits" onClick={handleEditClick}>
            Edit
          </button>
        )}
        
        <button className="submit-edits" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;


