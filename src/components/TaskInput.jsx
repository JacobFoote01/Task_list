import React, { useState } from 'react'

export default function TaskInput({data, setData}) {
    const [taskValue, setTaskValue] = useState('')
    const [timeValue, setTimeValue] = useState('')

    const addTask = () => {
      // create new task object
      const newTask = {
        description: taskValue,
        est_time: timeValue
      }
      // create new array with existing data and new task
      const newData = [...data, newTask]
      console.log(newData)
      // update state
      setData(newData)
      // reset input values
      setTaskValue('')
      setTimeValue('')
    }

    return (
    <div>
        <input type='text' value={taskValue} onChange={(event) => setTaskValue(event.target.value)}/>
        <input type='text' value={timeValue} onChange={(event) => setTimeValue(event.target.value)}/>
        <button onClick={addTask}>Add</button>
    </div>
  )
}
