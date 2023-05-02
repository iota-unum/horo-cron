import cron from 'node-cron'
import { generateAllImages } from './cards/generateAllImages.js'
import { cronGetHoroscopesAndSaveToDB } from './cronHoroscopes.js'

console.log('cron started')


cron.schedule('15 14 * * *', ()=> cronGetHoroscopesAndSaveToDB(4))








