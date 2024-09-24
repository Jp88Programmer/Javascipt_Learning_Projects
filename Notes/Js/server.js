// creating server 

// first start http server to practice with http request and response that 

const fs = require('fs')
const http = require('http')
const express = require('express')
const path = require('path')
const app = express()

const portNumber = 9090
const hostName = '127.0.0.1'

const home = fs.readFileSync('D:\\Jayendra\\Projects\\Notes\\index.html')

const paths = 'D:\\Jayendra\\Projects\\Notes\\index.html'
const server = http.createServer((req, res) => {

  console.log(req.url)

  let url = req.url
  console.log(url)

  if (url == '/index.html') {
    res.end(home)
  }
})

// app.use(express.static(path.join(__dirname, 'style')))

app.get('/', (req, res) => {

  res.render(paths)
//   res.sendFile(paths)
    // res.end(paths)
})

app.listen(portNumber, () => {
  console.log('server stating at port no ' + portNumber)
})
