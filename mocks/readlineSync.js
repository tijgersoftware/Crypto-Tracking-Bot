import readlineSync from "readline-sync";
delete readlineSync["question"];
readlineSync.question = function (str) {
  console.log("The readlineSync functionality has been overridden.");
  console.log(str);
  return str;
};
export default readlineSync;
