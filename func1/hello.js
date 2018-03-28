exports.handler = function(event, context, callback) {
  console.log("asdasq")
  process.exit()
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
}