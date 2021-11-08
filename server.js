//Initialize a file with node
  //$ node <file name>

//Update npm:
  // $ npm install -g npm

//Steps to prepare my project to use npm packages

//1. Initialize npm:
  //$ npm init -y
  //Creates package.json. COntains all info for my project, name, ver & list of packages 

//2. Install the package I want
  // $ npm install chalk

  //This makes 3 things happen:
    //1. A file named package-lock.json is created. DON'T TOUCH

    //2. A folder named node_modules is created, all npm packages go here

    //3. Inside package.json a new property "dependencies: {}" is created. Inside it we'll find the name of all the packages installed on my project



const chalk = require('chalk')
console.log(chalk.blue('hello world'))



const express = require('express') //Import express
const app = express() //Call the express() function and save it on the app

app.listen(3000, () => { //Activate server on an specific port
  console.log('server active on port 3000')
})



//Middleware
app.use(express.static('public')) //Tell our server the public folder exists & has static files (acess with /)



//Routes, all routes MUST start with a /
app.get('/', (request, response) => { //localhost:3000/home
  console.log(chalk.green('request done'))
  response.sendFile(__dirname + '/index.html') //__dirname makes it work wherever it's stored, whether it's localhost or a server
}) 

app.get('/contact', (request, response) => {
  response.send('contact page')
})