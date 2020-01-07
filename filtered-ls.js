const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], function(err, data) {
  data.forEach(function(data) {
    if (path.extname(data) === "." + vprocess.argv[3]) console.log(data);
  });
});
