// CRONS
import { getHoroscopes } from "./horoscopes/getHoroscopes.js";
import dotenv from "dotenv";
import { connectToDB } from "./database/connectToDB.js";
import { saveDailyHoroscope } from "./database/saveDailyHoroscope.js";
import { getFormattedDate } from "./helpers/dates.js";
import { generateSingleImage } from "./cards/generateSingleImage.js";
import { cronGetHoroscopesAndSaveToDB } from "./cronHoroscopes.js";
import { getDataFromDB } from "./database/getDataFromDB.js";
import { generateAllImages } from "./cards/generateAllImages.js";
dotenv.config();

async function main() {
  try {

//     const day = 3 // 0 === today, 1 === tomorrow , -1 yesterday
//     const {dateColons, dateDashes} = getFormattedDate(0)
// const data = await getDataFromDB(dateDashes)
// const horoscopes = data[0].horoscopes
// console.log(horoscopes, 'DATA FROM INDEX')
await generateAllImages(0)

  //  await  cronGetHoroscopesAndSaveToDB(day)
  //   //generate daily horoscope
  //   // const sign = 'toro'
  //   const { dateColons, dateDashes } = getFormattedDate(3);
  // //  const imgBuffer = await generateSingleImage(sign, dateDashes)


  //   const horoscopes = await getHoroscopes(dateColons);
  //   // console.log(horoscopes);

  //   // // store horoscope in db
  //   await connectToDB();
  //   console.log("CONNESSO AL DB");
  //   await saveDailyHoroscope(dateDashes, horoscopes);
  //   console.log('daily horoscope saved!')
  // //   console.log(dateColons, dateDashes)
  // // const horoscopes = await  getHoroscopesFromJson(dateDashes)
  // // console.log(horoscopes)

  } catch (error) {
    console.log(error);
  }
}


// generate cards with og

// store cards on cloudinary

// sent cards to twitter
main();
console.log("index");
