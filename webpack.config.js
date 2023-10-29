module.exports = {
  // ...other webpack configuration options...

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // ...other rules for different file types...
    ],
  },
};
