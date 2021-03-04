const express = require('express');
const path = require('path');
const app = express();
const members = require('./Members');
const logger = require('./middleware/logger.js')







//Gets all members via postman
app.get('/api/members',(req, res) => res.json(members));

//set static folder.               app.use indicates middleware
//__dirname is the current directory, public folder, file name
//a static page 
app.use(express.static(path.join(__dirname, 'public')))




// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname,'public', 'index.html'))
// });
// app.get('/', (req, res) =>{
    //     res.send('<h1> hello world!!!</h1>');


const PORT = process.env.PORT || 5001;


app.listen(PORT, () => console.log(`app is working on ${PORT}`));

