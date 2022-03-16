const express = require("express")
const cors = require("cors")
const app = express()

//app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

let results = [
    {id: "cat" , fact: "1 year of a cats life equals to 15 years of a humans life."},
    {id: "dog" , fact: "Dogs have the ability to smell medical conditions"},
    {id: "covid" , fact: "Total of 20 million cases in the UK since COVID started"},
    {id: "Queen" , fact: `The Queen has two birthdays:
    Her actual birthday - 21 April - and her official birthday, which is held on a Saturday in June - when the weather's better!`},
    {id: "Ronaldo" , fact: "Cristiano Ronaldo dos Santos Aveiro was born in the São Pedro parish of Funchal, the capital of the Portuguese island of Madeira, and grew up in the nearby parish of Santo António."},
    {id: "" , fact: ""},
    {id: "" , fact: ""},
    {id: "" , fact: ""},
    {id: "" , fact: ""},
    {id: "mars" , fact: `Mars has 2 moons called Deimos and Phobos. They are named after the two horses that pull the Roman god of war, Mars', chariot. They may be asteroids captured by Mars' gravity.`}
]

app.get('/results', (req, res) => {
    let result = []
    for (item in results){
        result.push(results[item].fact)
    }
    res.send(result)
})

app.get('/results/:id', (req, res) => {
    let idx =(req.params.id)

    let matchingFact = results.find(fact => fact.id.toLowerCase() === idx)
    res.send(matchingFact.fact)
}) 



module.exports = app
