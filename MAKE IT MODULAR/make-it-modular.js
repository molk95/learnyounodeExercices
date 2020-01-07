var mymodule = require("./mymodule.js");
var filter = process.argv[3];
var dir = process.argv[2];
// const fs = require("fs");
// const path = require("path");

mymodule(Buffer.from(dir), filter, function(err, data) {
  if (err) console.error(err);
  data.filter(e => path.extname(e) == "." + filter).map(e => console.log(e))
  callback(null, data);
});

// const fs = require("fs");
// const path = require("path");
// const myModule = require("./mymodule");
// const filename = process.argv[2];
// const ext = process.argv[3];

// myModule(Buffer.from(filename), ext, function(err, list) {
//   if (err) return console.log(err);

//   list.filter(x => path.extname(x) == "." + ext).map(x => console.log(x));
//   callback(null, list);
// });
