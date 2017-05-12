// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', function (errors, contents){
            console.log(contents)
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    else if(request.url === '/images/car1.jpg') {
        fs.readFile('images/car1.jpg', function (errors, contents){
            console.log(contents)
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/images/car2.jpg') {
        fs.readFile('images/car2.jpg', function (errors, contents){
                        console.log(contents)

            response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/images/car3.png') {
        fs.readFile('images/car3.png', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/png'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404)
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");