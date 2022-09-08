const http = require('http')

const app = http.createServer((req,res)=>{
  if(req.url === '/api/hello'){
    res.end('hello_world')
  }
})

app.listen(9000,'localhost',()=>{
  console.log('http://localhost:9000');
})