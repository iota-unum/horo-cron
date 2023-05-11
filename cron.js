import cron from 'node-cron'
// import { generateAllImages } from './cards/generateAllImages.js'
import { cronGetHoroscopesAndSaveToDB } from './cronHoroscopes.js'
import { getItalianTimestamp } from './helpers/dates.js'
import { tweetAllImages, tweetTest } from './twitter/tweetImage.js'

console.log('cron started')


cron.schedule('29 1 * * *', ()=> cronGetHoroscopesAndSaveToDB(2),  {
    scheduled: true,
    timezone: "Europe/Rome"
  })
cron.schedule('30 7 * * *', ()=> tweetAllImages(0),  {
    scheduled: true,
    timezone: "Europe/Rome"
  })
// cron.schedule('*/5 * * * *', ()=> tweetTest(0),  {
//     scheduled: true,
//     timezone: "Europe/Rome"
//   })







