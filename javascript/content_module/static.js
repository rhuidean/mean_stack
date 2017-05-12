module.exports = {

  static_contents: function(request,response){  
    if(request.url === '/'){
      fs.readFile('views/index.html', 'utf8', function (errors, contents){
      response.write(contents); 
      response.end();
    });
    else if(request.url === '/dojo.html'){
      fs.readFile('views/dojo.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
    else if(request.url === '/stylesheet/style.css'){
      fs.readFile('stylesheet/style.css', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
    else {
      response.end('File not found!!!');
    }
  }
}