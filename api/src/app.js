const { server } = require('./server.js');

server.listen(process.env.PORT || 3000);
console.log(`listen in port 3000`)
