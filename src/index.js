"use strict";

const morgan = require("morgan");
let winston = require("../lib");

module.exports = () => {
  morgan.format(
    "myformat",
    '[:date[clf]] ":method :url" :status :remote-addr :remote-user :res[content-length] - Response-time :response-time ms'
  );
  return morgan("myformat", { stream: winston.stream });
};
