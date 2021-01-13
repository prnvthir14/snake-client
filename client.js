
const net = require('net');

//establish connection with host server
const connect = function () {

  const conn = net.createConnection({

    host:'135.23.222.131',
    port: 50542
  
  });

  conn.setEncoding('utf8');

  return conn;
  
  //event handler to handle incomming data 
  client.on('data', () => {

    // client.write(`${data}`)
    console.log(`${data}`)

  })

}

module.exports = connect;