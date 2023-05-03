// CRONS
import { getHoroscopes } from "./horoscopes/getHoroscopes.js";
import dotenv from "dotenv";
import { connectToDB, disconnectFromDB } from "./database/connectToDB.js";
import { saveDailyHoroscope } from "./database/saveDailyHoroscope.js";
import { getFormattedDate } from "./helpers/dates.js";
dotenv.config();

export async function cronGetHoroscopesAndSaveToDB(daysToAddOrSubtract) {
    // daysToAddOrSubtract defaults to 0 i.e. today
  try {
    const { dateColons, dateDashes } = getFormattedDate(daysToAddOrSubtract);
    console.log(dateColons, 'date from cronGetHoroscopes')

    const horoscopes = await getHoroscopes(dateColons);

    // // store horoscope in db
    await connectToDB()
    console.log("CONNESSO AL DB");
    await saveDailyHoroscope(dateDashes, horoscopes);
    console.log("daily horoscope saved!");
    await disconnectFromDB()
    console.log('disconnected from db')
  } catch (error) {
    console.log(error);
  }
}


