const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (password) => {
  // Open file
  fs.open(path.join(__dirname, "../", "passwords.txt"), "a", 666, (e, id) => {
    // Write to file
    fs.write(id, password + os.EOL, null, "utf-8", () => {
      //Closes the file
      fs.close(id, () => {
        console.log(chalk.green("Password saved to password.txt"));
      });
    });
  });
};

module.exports = savePassword;
