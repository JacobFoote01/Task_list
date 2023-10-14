import TableHeader from './TableHeader'
import AddButton from './AddButton'
import TableRow from './TableRow'
import Task from './Task'



const TaskTable = ({data, setData}) => {
    return (
        <div>
            {data.map((task, index) => (
                <Task 
                    key={index}
                    index={index}
                    task={task}
                    data={data}
                    setData={setData}
                />
            ))}
        </div>
    )


    
//     return (
//         <div>
//             <table>

//                 <thead>
//                     <TableHeader />
//                 </thead>

//                 <tbody>

//                     <TableRow />

//                 </tbody>
        
//                 <tfoot>
//                     <AddButton 
//                     />
//                 </tfoot>
//             </table>
//         </div>
// ) 
}

export default TaskTable 