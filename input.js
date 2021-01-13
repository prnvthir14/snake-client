let connection;

//define this function to kill session when crtl+c is pressed..

const setupInput = function(conn) {
  connection=conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',handleUserInput);

  
  return stdin;
}


const handleUserInput = function(key) {

  if (key === '\u0003'){

    process.exit();

  } else if (key === 'w'){

    connection.write('Move: up')

  }else if (key === 'a'){

    connection.write('Move: left')

  }else if (key === 's'){

    connection.write('Move: down')

  }else if (key === 'd'){

    connection.write('Say: right')

  }else if (key === 'p'){

    connection.write('Say: LHL')

  }else if (key === 'l'){

    connection.write('Say: FTW')

  }else if (key === 'm'){

    connection.write('Say: JOB')

  } 

}


module.exports = setupInput;
