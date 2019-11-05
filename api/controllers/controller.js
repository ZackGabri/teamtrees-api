const fetch = require("node-fetch");
const cheerio = require("cheerio");

module.exports = (req, res) => {
  fetch("https://teamtrees.org")
    .then(res => res.text())
    .then(html => {
      let $ = cheerio.load(html);
      let totalTrees = Number($("#totalTrees")["0"].attribs["data-count"]);
      let lastDonator = $(".media-body")["0"];
      let topDonator = $("#top-donations")["0"].children[0].next.children[3];
      let timeRemainingTimestamp =  new Date("2020-01-01T00:00:00.000Z").getTime() - Date.now();
      const info = {
        total_trees: totalTrees,
        precentage_done: ((totalTrees / 20000000) * 100).toFixed(2),
        time_remaining_milliseconds: timeRemainingTimestamp,
        time_remaining: convertMS(timeRemainingTimestamp),
        last_donator: {
          name: lastDonator.children[1].children[0].data,
          trees: Number(lastDonator.children[3].children[0].data.split(" ")[0].replace(/,/g, "")),
          timestamp: new Date(lastDonator.children[5].children[0].data).getTime(),
          message: lastDonator.children[7].children[0] ? lastDonator.children[7].children[0].data : null
        },
        top_donator: {
          name: topDonator.children[1].children[0].data,
          trees: Number(topDonator.children[3].children[0].data.split(" ")[0].replace(/,/g, "")),
          timestamp: new Date(topDonator.children[5].children[0].data).getTime(),
          message: topDonator.children[7].children[0] ? topDonator.children[7].children[0].data : null
        }
      }
      res.json(info);
    })
    .catch(e => {
      console.error(e);
      res.send(e);
    });
};

function convertMS(milliseconds) {
  let day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
    days: day,
    hours: hour,
    minutes: minute,
    seconds: seconds
  };
}
