var fs = require("fs");
var http = require("http");
var path = require("path");
var url =  require("url");

http.createServer(function(req,res){
    var parsed = url.parse(req.url);
    var filename = path.parse(parsed.pathname);

    filen = filename.name==""?"index":filename.name;
    console.log("file name:" + filen)
    ext = filename.ext==""?".html":filename.ext;
    console.log("EXT" + ext)
    dir = filename.dir=="/"?"":filename.dir+"/"; // need the / after the directory
    console.log("dir" + dir)
    page = filename.name==""?"index.html":filename.name;
    console.log("page" + page)



    f = (dir+filen+ext).replace("/","");
    console.log(f)

    var mimeTypes ={
        '.html':"text/html",
        '.js' : "text/javascript",
        ".css" : "text/css",
        ".png" : "image/png",
        '.jpg': "image/jpg",
        ".gif":'image/gif',
        '.svg': "image/svg",
    }
    
    

    if(f) {
        fs.readFile(f, function(err, data) {
        if (page) {
            if (mimeTypes.hasOwnProperty(ext)) {
                console.log("mimness" + mimeTypes[ext])
                res.writeHead(200, { 'Content-Type': mimeTypes[ext]});
                res.write("<script> var page ='"+page+"';</script>")
                res.end(data, 'utf-8');

            }
            
    
        }
        else{
            console.log(err)
        }
    })
}

}).listen("8080")

