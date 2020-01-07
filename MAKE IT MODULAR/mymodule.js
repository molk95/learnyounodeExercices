var fs = require("fs");
var path = require("path");

const mymodule = (dir, filter, callback) => {
  fs.readdir(dir, filter, function(err, data) {
    if (err) {
      return callback(err);
    }
    data = data.filter(e => path.extname(e) === "." + filter)
    callback(null, data);
  }, 


module.exports = {mymodule})}
