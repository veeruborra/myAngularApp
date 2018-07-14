const http = require("http");
const app = require("./backend/app");

const normalizePort = val =>{
    var port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}

const onError = error => {
    if(error.svscall != "listen"){
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch(error.code) {
        case "EACCES":
        console.log(bind + " requires elivated privileges");
        process.exit(1);
        break; 
        case "EADDRINUSE":
        console.log(bind + " is already in use");
        process.exit(1);
        break; 
        default:
        throw error;
    }
}
const port = process.env.PORT || 3000;

app.set('port', port);
const server = http.createServer(app);

server.listen(port);