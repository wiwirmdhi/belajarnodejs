const fs = require("fs");
const sourceFileName = "homework.log";

const logFileName = "log.txt";
fs.readFile(sourceFileName, "utf8", (err, data) => {
  if (err) {
    console.error(`Gagal membaca file ${sourceFileName}:`, err);
  } else {
    fs.appendFile(logFileName, data, (err) => {
      if (err) {
        console.error(`Gagal menulis ke file ${logFileName}:`, err);
      } else {
        console.log(
          `Data dari ${sourceFileName} berhasil disalin ke ${logFileName}.`
        );
      }
    });
  }
});
