
const net = require('net');

//establish connection with host server
const connect = function () {

  const conn = net.createConnection({

    host:'135.23.222.131',
    port: 50542
  
  });

  conn.setEncoding('utf8');
  //console.log(conn)
  
  
  //event handler to handle incomming data 
  conn.on('data', (data) => {

    // client.write(`${data}`)
    console.log('Server says:',data)

  })

  //event handler to add name to snake
  let name = 'PVT'
  conn.on('connect', () => {
    
    console.log('PT Successfully connected to game serve')
    conn.write(`Name: ${name}`)

 
  })


  //
  return conn;

}

module.exports = connect;