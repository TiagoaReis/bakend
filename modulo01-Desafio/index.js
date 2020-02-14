const express = require('express')
const server = express()
server.use(express.json())
// Query params = ?users=Tiago
//Route params = /users/1
//Request body = { "name": "Tiago", "email":"tiagoareis@homtmail.com"}
//CRUD = creat, read , update, delete

const Projects = []

// function checkUserInArray (req, res, next) {
//     const user = users[req.params.index]
//     if(!user) {
//         return res.status(400).json({error: "User does not exists"})
//     }
//     //else
//     req.user = user
//     //end
//     return next()
// }

// function checkUserExists (req, res, next) {
//     //const user = users[req.bady.name]
//     if(!req.body.name) {
//         return res.status(400).json({error: "User name is required"})
//     }
//     //else
    
//     //end
//     return next()
// }

// server.get('/Projects/:index',checkUserInArray, (req, res) => {
//     //const id = req.params.id
//     const { index } = req.params    
//     return res.json({ message: `Bem vindo usuário: ${req.user} `})
// })
server.get('/Projects', (req, res) => {    
    // const { index } = req.params
    return res.json({ Projects})
})

server.post('/Projects', (req, res) => {    
    const { id, title } = req.body
    const project = {
        id,
        title,
        tasks:[],
    }
    Projects.push(project)
    return res.json({ project})
})
server.post('/Projects/:id/tasks', (req, res) => {    
    const { title } = req.body
    const { id } = req.params
    const project = Projects.find(p => p.id == id)
    project.tasks.push(title)
    return res.json({ project})
})

server.put('/Projects/:id', (req, res) => {    
    const { title } = req.body
    const { id } = req.params
    const project = Projects.find(p => p.id == id)
    project.title = title
    return res.json({ project})
})


server.delete('/Projects/:id', (req, res) => {    
    const { index } = req.params

    users.splice(index, 1)
    return res.json({ users})
})
// server.get('/users/:id', (req, res) => {
//     //const id = req.params.id
//     const { id } = req.params
//     return res.json({ message: `Bem vindo usuário: ${id} `})
// })

// server.get('/users/', (req, res) => {
//     const nome = req.query.name
//     return res.json({ message: `Bem vindo ${nome}`})
// })


// server.get('/', (req, res) => {
//     return res.json({ message: 'Servidor backend 01'})
// })


server.listen(7000)