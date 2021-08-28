// Node Server

const http = require('http');
const server = http.createServer(

	function(req, res){
		console.log(req.url );

		let mydata;
    if ( req.url === "/hello" ) {
      mydata = "Hey there. - Welcome to my Server...";
    } else {
      mydata = "I don't know you!";
    }
    mydata = mydata + " " + "Thank You!";

		res.writeHead( 200, { "Content-Type": "text/plain" } );
		res.end(mydata);
	}
);
server.listen(8080, "0.0.0.0");
console.log("server has started");


