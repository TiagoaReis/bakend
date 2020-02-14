const express = require('express')
const server = express()
server.use(express.json())
// Query params = ?users=Tiago
//Route params = /users/1
//Request body = { "name": "Tiago", "email":"tiagoareis@homtmail.com"}
//CRUD = creat, read , update, delete

const users = ["Jonatas", "Tiago", "Luiz", "Gabriel"]

function checkUserInArray (req, res, next) {
    const user = users[req.params.index]
    if(!user) {
        return res.status(400).json({error: "User does not exists"})
    }
    //else
    req.user = user
    //end
    return next()
}

function checkUserExists (req, res, next) {
    //const user = users[req.bady.name]
    if(!req.body.name) {
        return res.status(400).json({error: "User name is required"})
    }
    //else
    
    //end
    return next()
}

server.get('/users/:index',checkUserInArray, (req, res) => {
    //const id = req.params.id
    const { index } = req.params    
    return res.json({ message: `Bem vindo usuário: ${req.user} `})
})
server.get('/users', (req, res) => {    
    const { index } = req.params
    return res.json({ users})
})

server.post('/users',checkUserExists, (req, res) => {    
    const { name } = req.body
    users.push(name)
    return res.json({ users})
})

server.put('/users/:index',checkUserExists, (req, res) => {    
    const { name } = req.body
    const { index } = req.params

    users[index] = name
    return res.json({ users})
})

server.delete('/users/:index', (req, res) => {    
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