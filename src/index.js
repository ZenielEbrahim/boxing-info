const path = require('path')
const express = require('express')
const app= express()
const hbs = require('hbs')
const port = process.env.PORT || 3000 

const publicPath = path.join(__dirname, '../pulic')
app.set('view engine', 'hbs')
app.use(express.static(publicPath))


app.get('', (req, res)=>{
    res.render('index')
})




app.listen(port, ()=>{
    console.log('server up on '+ port)
})
