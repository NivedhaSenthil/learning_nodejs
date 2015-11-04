var http = require("http");
var url = require("url");

function start(route,handle){
http.createServer(function(request, response) {

var pathname = url.parse(request.url).pathname; 
console.log("Request for " + pathname + " received.");

response.writeHead(200, {"Content-Type": "text/plain"}); 
//response.write("<link href='data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=' rel='icon' type='image/x-icon' /> <iframe width='560' height='315' src='https://www.youtube.com/embed/ioXBf3FAJt8' frameborder='0' allowfullscreen> </iframe>");
var content = route(pathname,handle);
console.log(content);
response.write(content.toString());
response.end();

}).listen(8888,function(){console.log("Sever listening in port 8888");});
}

exports.start = start;
