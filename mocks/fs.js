import fs from "fs";
delete fs["readFile"];

fs.readFile = function (str) {
  console.log("The functionality has been overridden.");
  console.log(str);
};

delete fs["fetch"];
fetch = function (str) {
  console.log("The functionality fetch has been overridden.");
  console.log(str);
  let response = { status: 400, statusText: "OK" };

  return response;
};

delete fs["writeFileSync"];
fs.writeFileSync = function (path, json) {
  console.log("The functionality writeFileSync has been overridden.");
  console.log(path);
  console.log(json);
};

export default fs;
