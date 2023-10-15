let data = [
    {id:0, description: 'Wash the Car', est_time: '1 hr'},
    {id:1, description: 'Clean the Bathrooms', est_time: '.5 hr'},
    {id:2, description: 'Mow the Lawn', est_time: '1.5 hrs'},
]

function getTasks(req, res) {
    res.json(data)
}

function addTask(req, res) {
    data.push({
        id: Math.floor(Math.random() * 100000000),
        ...req.body
    })

    console.log(data)

    res.json(data)
}

function removeTask(req, res) {
    const { id } = req.params

    data = data.filter((task) => {
        return task.id !== Number(id)
    })

    res.json(data)
}

function updateTask(req, res) {
     data = data.map((task) => {
        if (task.id === Number(req.body.id)) {
            return req.body
        }
        return task
     })

     console.log(req.body)
     console.log(data)


     res.json(data)
}



export {
    getTasks,
    addTask,
    removeTask,
    updateTask
}


// let TEST_DATA = [
//     {id:0, description: 'Wash the Car', est_time: 1},
//     {id:0, description: 'Clean the Bathrooms', est_time: 2},
//     {id:0, description: 'Mow the Lawn', est_time: .5},
// ]

// let globalId = 3

// const handlerFunctions = {
//     TEST_DATA
// }

// export default handlerFunctions