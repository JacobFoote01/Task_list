import React, { useState } from 'react'

const Task = ({task, data, setData, index}) => {
  const { description, est_time } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState({
    description: task.description,
    est_time: task.est_time,
  });

  // remove a task from the list
  const removeTask = () => {
    // filter out the task at the index
    const newData = data.filter((task, i) => i !== index);
    // set the data to the new filtered data
    setData(newData);
  }

  // handle the input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // set the state of the input
    setInput({ ...input, [name]: value });
  }

  // edit a task from the list
  const editTask = () => {
    setIsEditing(true);
  }


  return (
    <div className='task'>
      {!isEditing && <p>{description}</p>}
      {!isEditing && <p>{est_time}</p>}
      {isEditing && <input type="text" placeholder="description"  name="description" value={input.description} onChange={handleInputChange} />}
      {isEditing && <input type="text" placeholder="est_time"  name="est_time" value={input.est_time} onChange={handleInputChange} />}
      <button onClick={editTask}>Edit</button>
      <button onClick={removeTask}>Remove</button>
    </div>
  )
}

export default Task