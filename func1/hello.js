exports.handler = function(event, context, callback) {
  process.exit()
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
}