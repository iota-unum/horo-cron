import {
  getGeneralAspects,
  getMoonPhase,
  getMoonPosition,
  getPlanetsPositions,
} from "./getPlanetsData.js";
import { getHoroscope } from "./horoscope.js";
import { translate } from "./translation.js";
const zodiacSigns = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];
const aspectsTable = {
    1: "conjunction",
    7: "opposition",
    4: "square",
    10: "square",
    11: "sextile",
    3: "sextile",
    5: "trine",
    9: "trine",
  };
function getZodiacSign(degrees) {
  const mod = degrees % 360;
  const index = Math.floor(mod / 30);
  return zodiacSigns[index];
}

function getHouse(sign1, sign2) {
  const house =
    ((zodiacSigns.indexOf(sign2) - zodiacSigns.indexOf(sign1) + 12) % 12) + 1;

  return house;
}
function detectAspect(p1, p2) {
  const margin = {
    conjunction: 8,
    opposition: 8,
    trine: 8,
    square: 7,
    sextile: 6,
    quincunx: 5,
    quintile: 1,
    septile: 1,
    "semi-square": 1,
    "semi-sextile": 1,
  };

  const aspectAngles = {
    conjunction: [0],
    opposition: [180],
    trine: [120, 240],
    square: [90, 270],
    sextile: [60, 300],
    // quincunx: [150, 210],
    // quintile: [72, 144, 216, 288],
    // septile: [51.43, 128.57, 205.71, 282.86, 318.57],
    // "semi-square": [45, 225],
    // "semi-sextile": [30, 210],
  };

  const angle = Math.abs(p1 - p2);
  let aspectType = null;
  let isAspect = false;

  for (const [type, angles] of Object.entries(aspectAngles)) {
    for (const a of angles) {
      const lower = a - margin[type];
      const upper = a + margin[type];
      if (angle >= lower && angle <= upper) {
        aspectType = type;
        isAspect = true;
        break;
      }
    }
    if (isAspect) {
      break;
    }
  }

  return { isAspect, aspectType, p1, p2 };
}

export function getAspects(natalSunDegree, date) {
  const sign = getZodiacSign(natalSunDegree);
  const horoscope = getHoroscope(date);
  const planets = getPlanetsPositions(date);
  const aspectsList = planets
    .map((p) => {
      const { aspectType } = detectAspect(natalSunDegree, p.DecimalDegrees);
      // const planetSign = horoscope.CelestialBodies[p.name].Sign.key;
      return { sign, planet: p.planet, aspect: aspectType, planetSign: p.sign };
    })
    .filter((a) => a.aspect !== null)
    .filter((aspect) => aspect.planet !== "sirius")
    .map((asp) => {
      const house = getHouse(sign.toLowerCase(), asp.planetSign);
      return { ...asp, house };
    });

  return aspectsList;
}

export function getDecadesAspects(date) {
  const allAspects = zodiacSigns.map((sign, i) => {
    const aspects = [i * 30 + 5, i * 30 + 15, i * 30 + 25].map((degree, i) => {
      const aspects = getAspects(degree, date);
      return { decade: i + 1, decadeAspects:aspects };
    });
    return { sign, aspects };
  });
  return allAspects;
}

export function getMoonAspects(date) {
  return getGeneralAspects(date).filter(
    (asp) => asp.planet1 === "moon" || asp.planet2 === "moon"
  );
}

export function cleanMoonAspects(moonAspects) {
  //deletes the moon from planets since redundant
  return moonAspects.map((obj) => {
    let planet = obj.planet1 === "moon" ? obj.planet2 : obj.planet1;
    return {
      aspect: obj.aspect,
      planet: planet,
    };
  });
}
export function addSignToMonaspects(moonAspects, date) {
  return moonAspects.map((m) => {
    const planet = getPlanetsPositions(date).filter(
      (p) => p.planet === m.planet
    );
    return { ...m, sign: planet[0].sign };
  });
}

export function addHousesToMonaspects(sign, moonAspectsWithSigns) {
  return moonAspectsWithSigns.map((m) => {
    const house = getHouse(sign, m.sign);
    return { ...m, house };
  });
}

export function addMoonPhase(date, moonAspects) {
  const { phaseQuarterString: quarter, shapeDirectionString: direction } =
    getMoonPhase(date);
  const phase = { quarter, direction };
  return { phase, moonAspects };
}
export function translateToItalian(array) {
  return array.map((ob) => translate(ob));
}

//get moon aspects
//clean
//add sign
//add house
//add phase
export function getAspectFromHouse(house){
    console.log('HOUSE', house)
    return aspectsTable[house] || "";


}
export function getMoonOverview(date, sign) {
    const moonAspects = getMoonAspects(date);
    const cleanedAspects = cleanMoonAspects(moonAspects);
    const aspectsWithSigns = addSignToMonaspects(cleanedAspects, date);
    const aspectsWithHouses = addHousesToMonaspects(sign, aspectsWithSigns);

    const planetAspectsWithSign = aspectsWithHouses.map(a =>{
      const planetAspectWithSign = getAspectFromHouse(a.house)
      return {...a, planetAspectWithSign}
    })
    const aspectsWithPhase = addMoonPhase(date, planetAspectsWithSign);

    const moonSign = getMoonPosition(date).sign
    const moonHouse = getHouse(sign,moonSign)
    const moonAspectWithSign = getAspectFromHouse(moonHouse)
    console.log('moonhouse', moonAspectWithSign)
  const position = {moonSign, moonHouse, moonAspectWithSign}
  return {position, ...aspectsWithPhase};
}

export function addMoonToDecadesAspects(decadesAspects, date) {
  return decadesAspects.map((asp) => {
    const moonOverview = getMoonOverview(date, asp.sign);
    return { ...asp, moonOverview };
  });
}

export function getGlobalOverview(date){
const decadesAspects = getDecadesAspects(date)
return addMoonToDecadesAspects(decadesAspects, date)

}