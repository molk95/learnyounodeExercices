const fs = require("fs");

fs.readFile(process.argv[2], function callback(err, data) {
  var str = data.toString();
  var str_arr = str.split("\n");
  var newline_length = str_arr.length - 1;

  console.log(newline_length);
});
