//console.log(process.argv);
const { program } = require("commander");
const createPassword = require("./utils/createPassword");
/* TESTING
if (process.argv[2] === "generate") {
  console.log("Generated");
}
*/

// CODE
program.version("1.0.0").description("Simple Password Generator");
program
  // .option("short-command, long command", "command description", "default")
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to password.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

// TEST:console.log(program.opts());

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatePassword = createPassword(length, numbers, symbols);

//Output generated password
console.log(generatePassword);
