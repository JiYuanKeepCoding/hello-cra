exports.handler = function(event, context, callback) {
  console.log("asdasq")
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
}