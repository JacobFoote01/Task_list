import './App.css'
import TableHeader from './components/TableHeader'
import TableRow from './components/TableRow'
import TaskTable from './components/TaskTable'
import TaskInput from './components/TaskInput'
import {useState} from 'react'

function App() {
  const [data, setData] = useState([])

  return (
    <>
      <h1 color='blue'> My Task List </h1>
      <TaskInput data={data} setData={setData}/>
      <TaskTable data={data} setData={setData}/>
    </>
)}

export default App
