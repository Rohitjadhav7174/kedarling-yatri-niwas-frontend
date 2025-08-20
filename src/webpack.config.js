// webpack.config.js
module.exports = {
  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "url": require.resolve("url/"),
      "assert": require.resolve("assert/"),
      "util": require.resolve("util/"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/")
    }
  }
}