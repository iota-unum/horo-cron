import cron from "node-cron";
// import { generateAllImages } from './cards/generateAllImages.js'
import { cronGetHoroscopesAndSaveToDB } from "./cronHoroscopes.js";
import { getItalianTimestamp } from "./helpers/dates.js";
import { tweetAllImages, tweetTest } from "./twitter/tweetImage.js";
console.log("cron started");

cron.schedule("37 10 * * *", () => cronGetHoroscopesAndSaveToDB(3), {
  scheduled: true,
  timezone: "Europe/Rome",
});
cron.schedule("30 7 * * *", () => tweetAllImages(0), {
  scheduled: true,
  timezone: "Europe/Rome",
});
cron.schedule("40 19 * * *", () => tweetAllImages(1), {
  scheduled: true,
  timezone: "Europe/Rome",
});
cron.schedule(
  "*/30 * * * *",
  () => {
    const timestamp = getItalianTimestamp();

    console.log(timestamp);
  },
  {
    scheduled: true,
    timezone: "Europe/Rome",
  }
);
// cron.schedule('*/5 * * * *', ()=> tweetTest(0),  {
//     scheduled: true,
//     timezone: "Europe/Rome"
//   })
