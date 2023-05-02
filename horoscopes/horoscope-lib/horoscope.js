import { createRequire } from "module";
const require = createRequire(import.meta.url);


const { Origin, Horoscope } = require("circular-natal-horoscope-js");





export function getHoroscope(date) {
    const [year, month, day, hour, minute] = date.split(":").map(Number);
  
    const origin = new Origin({
      year,
      month: month - 1,
      date: day,
      hour,
      minute,
      latitude: 41.1171,
      longitude: 16.8719,
    });
  
    const horoscope = new Horoscope({
      origin: new Origin(origin),
      houseSystem: "whole-sign",
      zodiac: "tropical",
      aspectPoints: ["bodies", "points", "angles"],
      aspectWithPoints: ["bodies", "points", "angles"],
      aspectTypes: ["major"],
      customOrbs: {},
      language: "en",
    });
    return horoscope
  }



