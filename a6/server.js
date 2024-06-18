var http = require('http');
var fs = require('fs');
var path = require('path'); // Import the path module

// Static files
var publicDir = "C:\\Users\\matth\\WebstormProjects\\a6\\"; // File Path

http.createServer(function(req, res) {
    var parsedUrl = require('url').parse(req.url, true);
    var pathname = decodeURIComponent(parsedUrl.pathname); // Decode the URL-encoded path
    var filePath = path.join(publicDir, pathname);

    // If the path ends with a '/', it's a directory. Append 'index.html'.
    if (filePath.endsWith(path.sep)) {
        filePath = path.join(filePath, 'index.html');
    }
    // Handle index and intro cases
    if (pathname === '/index' || pathname === '/introduction') {
        filePath = path.join(publicDir, pathname + '.html');
    }

    console.log(filePath); // Log the file path

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`File doesn't exist: ${err}`);
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        fs.readFile(filePath, function(err, data) {
            if (err) {
                console.error(`Error reading file: ${err}`);
                res.writeHead(500, {'Content-Type': 'text/html'});
                return res.end("500 Internal Server Error");
            }

            var contentType = 'text/html'; // Default content type
            if (filePath.endsWith('.css')) {
                contentType = 'text/css';
            } else if (filePath.endsWith('.js')) {
                contentType = 'application/javascript';
            } else if (filePath.endsWith('.png')) {
                contentType = 'image/png';
            } else if (filePath.endsWith('.jpg')) {
                contentType = 'image/jpeg';
            } else if (filePath.endsWith('.gif')) {
                contentType = 'image/gif';
            }
            res.writeHead(200, {'Content-Type': contentType});
            res.end(data);
        });
    });
}).listen(3000);

console.log('Server running at http://localhost:3000/');