const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message1" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end() //we dont need return for response but to return from the anonymous function
        // after res.end() nothing should be there
    }
    if (url === "/message1" && method === "POST") {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('parsedBody:' + parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>')
    res.end();
}

module.exports = {
    handler : requestHandler,
    someText : "some hard coded text"
};

//OR

// module.exports.handler = requestHandler;
// module.exports.someText = "some hard coded text"

//OR

//exports.handler = requestHandler;
//exports.someText = "some hard coded text"

