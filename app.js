const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('customEvent', (message, user) => {

  console.log(`User : ${user} : Message : ${message}`);
});

// emit events 
emitter.emit('customEvent', 'Hello', 'Neeraj')
emitter.emit('customEvent', 'Hello', 'Lakshmi')

process.stdin.on('data', (data) => {
  const input = data.toString().trim();

  if (input === 'exit') {
    emitter.emit('customEvent', 'Goodbye', 'process');
    process.exit();

  }
  emitter.emit('customEvent', data.toString(), 'terminal')
})