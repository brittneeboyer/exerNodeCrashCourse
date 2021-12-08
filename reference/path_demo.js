const path = require('path');
    // don't need to have a separate file becauase Node already has path
    // check out this documentation: https://nodejs.org/dist/latest-v17.x/docs/api/path.html

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));