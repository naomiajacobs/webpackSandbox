module.exports = {
  entry: './sandbox.js', // This is our top-level file that kicks things off and requires other modules
  output: {
    path: __dirname, // This is where we want our output file to go
    filename: 'bundle.js', // This is what we want our output file to be called
  },
};
