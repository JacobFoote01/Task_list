import TableHeader from './TableHeader'
import AddButton from './AddButton'
import TableRow from './TableRow'



const TaskTable = () => {


    
    return (
        <div>
            <table>

                <thead>
                    <TableHeader />
                </thead>

                <tbody>

                    <TableRow />

                </tbody>
        
                <tfoot>
                    <AddButton 
                        //addClick={addRow}
                    />
                </tfoot>
            </table>
        </div>
) 
}

export default TaskTable 