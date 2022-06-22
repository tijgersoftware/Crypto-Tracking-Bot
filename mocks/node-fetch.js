//import fetch from 'node-fetch';
import * as nf from "node-fetch";
delete nf["fetch"];
//  node-fetch['fetch'];

nf.fetch = function (str) {
  console.log("The functionality node-fetch has been overridden.");
  console.log(str);
};

export default nf;
