import { disconnectFromDB } from "./connectToDB.js";
import { DailyHoroscope } from "./schemas.js";


export async function saveDailyHoroscope (date, horoscopes){


    try {
        const dailyHoroscope = new DailyHoroscope({
            date: date,
            horoscopes: horoscopes
          });

          await dailyHoroscope.save()
          console.log('horoscope saved')
          
        
    } catch (error) {

        console.log(error)
        
    }


}

  