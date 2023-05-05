import cron from 'node-cron'
// import { generateAllImages } from './cards/generateAllImages.js'
import { cronGetHoroscopesAndSaveToDB } from './cronHoroscopes.js'
import { getItalianTimestamp } from './helpers/dates.js'
import { tweetAllImages } from './twitter/tweetImage.js'

console.log('cron started')


cron.schedule('0 17 * * *', ()=> cronGetHoroscopesAndSaveToDB(2),  {
    scheduled: true,
    timezone: "Europe/Rome"
  })
cron.schedule('0 7 * * *', ()=> tweetAllImages(0),  {
    scheduled: true,
    timezone: "Europe/Rome"
  })







