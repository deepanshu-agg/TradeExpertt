// importing the library
const express = require('express')

// calling the express method (instiating the lib)
const app = express()

const person = [
    {
        Id: 1,
        name: "Deepanshu",
        email: "deepanshubc@gmail.com"

    },
    {
        Id: 2,
        name: "Radhika",
        email: "radhikaabc@gmail.com"

    },
    {
        Id: 3,
        name: "Rohit",
        email: "rohitabc@gmail.com"
    }
]

// CRUD applications - create, read, update and delete
// GET(read data), POST(create data), PUT(update data), DELETE (data deletion)

// get method - two parameters -- routing (path) and callback func (actual implementation of code)
app.get('/hello',(req,res)=>{
    try{
    res.send('Hello')
    }catch(err){
        res.send('something went wrong')
    }
})

app.get('/alluser',(req,res)=>{
    try{
    res.send(person)
    }catch(err){
        res.send('something went wrong')
    }
})

// app.get('/alluser/:name',(req,res)=>{
//     try{
//     let name = req.params.name
//     res.send(name)
//     }catch(err){
//         res.send('something went wrong')
//     }
// })

app.get('/alluser/:name', (req, res) => {
    try {
        const name = req.params.name.toLowerCase(); // Convert to lowercase for case-insensitive comparison
        const user = person.find(p => p.name.toLowerCase() === name); // Search for the user

        if (user) {
            res.send(user); // If user exists, send the user details
        } else {
            res.send({ message: "User doesn't exist" }); // If user doesn't exist, send this message
        }
    } catch (err) {
        res.send('Something went wrong');
    }
});

app.listen(3000,()=>{
    console.log('server started at port 3000')
})