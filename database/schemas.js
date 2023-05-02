import mongoose from "mongoose";


const horoscopeSchema = new mongoose.Schema({
    sign: { type: String, required: true },
    date: { type: String, required: true },
    horoscope: { type: String, required: true }
  });
  
  const dailyHoroscopeSchema = new mongoose.Schema({
    date: { type: String, required: true, unique: true },
    horoscopes: [horoscopeSchema]
  });
  
  export const DailyHoroscope = mongoose.model('DailyHoroscope', dailyHoroscopeSchema);
  