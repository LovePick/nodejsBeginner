var http = require("http");
var url = require("url");


function start() {


    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
    }


    http.createServer(onRequest).listen(8888);
    console.log("Server has started");

}

function route(pathname) {
    console.log("About to route a request for " + pathname);
}

exports.start = start();

