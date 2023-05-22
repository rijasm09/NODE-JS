// FOR SERVER CREATION
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message1" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end() //we dont need return for response but to return from the anonymous function
        // after res.end() nothing should be there
    }
    if (url === "/message1" && method === "POST") {
        fs.writeFileSync('message.txt','DUMMY')
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    // res.setHeader('Content-Type', 'text/html')

})
server.listen(3000);


