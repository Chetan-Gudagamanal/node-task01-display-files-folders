const express    = require('express')
const serveIndex = require('serve-index')
 
const app = express()
const port=process.env.PORT || 3001

// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use('/localDir', express.static('public/localDir'), serveIndex('public/localDir', {'icons': true}))

app.get('/',(req,res)=>{
    res.send(`<h4 style="text-align:center;">Welcome, Click here to see the local Dir contents :<a href="http://localhost:3001/localDir">Click Here</a></h4>`)
})
// Listen
app.listen(port,()=>{
    console.log("Server is started on port", port)
})