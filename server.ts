import http, { IncomingMessage, ServerResponse } from 'http'

const fruits = [
    'Apple',
    'Banana'
]

function onStart() {
    console.log('Server is running');
}

function handler(request: IncomingMessage, response: ServerResponse){
    console.log(request.method, request.url);
    
}

const server = http.createServer(handler)
server.listen(8080, 'localhost', onStart)