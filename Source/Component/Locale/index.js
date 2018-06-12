const lofac = require("C:/xampp/htdocs/locc/Build/Production/index.js");
const dict = require("./dictionary.json");

var loc = lofac({
    // dict: dict,
    shadowingMode: true,
});

export default loc;