const moment = require("moment");
const fs = require("fs");
const path = require("path");

const stats = (prod_name, action) => {
  fs.readFile(path.join(__dirname, "db/stats.json"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const stat = JSON.parse(data);
      stat.push({
        time: moment().format("DD MMM YYYY, h:mm:ss a"),
        prod_name,
        action,
      });
      fs.writeFile(
        path.join(__dirname, "db/stats.json"),
        JSON.stringify(stat, null, 4),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });
};

module.exports = stats;
