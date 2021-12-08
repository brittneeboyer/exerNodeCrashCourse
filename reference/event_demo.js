// https://nodejs.org/dist/latest-v17.x/docs/api/events.html

const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

