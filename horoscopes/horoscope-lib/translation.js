export const translation = {
  Aries: "Ariete",
  aries: "ariete",
  Taurus: "Toro",
  taurus: "toro",
  Gemini: "Gemelli",
  gemini: "gemelli",
  Cancer: "Cancro",
  cancer: "cancro",
  Leo: "Leone",
  leo: "leone",
  Virgo: "Vergine",
  virgo: "vergine",
  Libra: "Bilancia",
  libra: "bilancia",
  Scorpio: "Scorpione",
  scorpio: "scorpione",
  Sagittarius: "Sagittario",
  sagittarius: "sagittario",
  Capricorn: "Capricorno",
  capricorn: "capricorno",
  Aquarius: "Aquario",
  aquarius: "aquario",
  Pisces: "Pesci",
  pisces: "pesci",
  sun: "sole",
  moon: "luna",
  mercury: "mercurio",
  venus: "venere",
  mars: "marte",
  jupiter: "giove",
  saturn: "saturno",
  uranus: "urano",
  neptune: "nettuno",
  pluto: "plutone",
  chiron: "chirone",
  conjunction: "congiunzione",
  sextile: "sestile",
  square: "quadratura",
  trine: "trigono",
  opposition: "opposizione",
  "New Moon": "luna nuova",
  "First Quarter": "primo quarto",
  "Full Moon": "luna piena",
  "Last Quarter": "secondo quarto",
  Waxing: "crescente",
  Waning: "calante",
};

export const numberTranslation = {
  1: "prima",
  2: "seconda",
  3: "terza",
  4: "quarta",
  5: "quinta",
  6: "sesta",
  7: "settima",
  8: "ottava",
  9: "nona",
  10: "decima",
  11: "undicesima",
  12: "dodicesima",
};
export function translate(obj) {
  if (typeof obj === "string") {
    return (
      translation[obj] || numberTranslation[obj] || obj
    );
  } else if (typeof obj === "number") {
    return numberTranslation[obj] || obj;
  } else if (Array.isArray(obj)) {
    return obj.map((element) => translate(element));
  } else if (typeof obj === "object") {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      newObj[translation[key] || key] = translate(value);
    }
    return newObj;
  } else {
    return obj;
  }
}



// this works well also in nested objects and arrays, fails to translate numbers though
// export function translate(obj) {
//   if (typeof obj === "string") {
//     return (
//       translation[obj] || numberTranslation[obj] || obj
//     );
//   } else if (Array.isArray(obj)) {
//     return obj.map((element) => translate(element));
//   } else if (typeof obj === "object") {
//     const newObj = {};
//     for (const [key, value] of Object.entries(obj)) {
//       newObj[translation[key] || key] = translate(value);
//     }
//     return newObj;
//   } else {
//     return obj;
//   }
// }
// the one below is working with a minor bug
// export const translate = (obj) => {
//   const keys = Object.keys(obj);
//   const newObj = {};
//   keys.forEach((key) => {
//     if (typeof obj[key] === "object") {
//       newObj[key] = translate(obj[key]);
//     } else {
//       newObj[key] =
//         translation[obj[key]] || numberTranslation[obj[key]] || obj[key];
//     }
//   });
//   return newObj;
// };

// function translateTerm(term) {
//   return translation[term] || term;
// }

// function translateAspectsToItalian(aspects) {
//   return aspects.map((aspect) => {
//     const italianAspect = {
//       ...aspect,
//       planet: translateTerm(aspect.planet),
//       planetSign: translateTerm(aspect.planetSign),
//       aspect: translateTerm(aspect.aspect),
//     };
//     return italianAspect;
//   });
// }

// function translateToItalian(zodiacSigns) {
//   return zodiacSigns.map((sign) => {
//     const italianSign = {
//       ...sign,
//       signName: translateTerm(sign.signName),
//       decades: sign.decades.map((decadeObj) => {
//         const italianDecade = {
//           ...decadeObj,
//           aspects: translateAspectsToItalian(decadeObj.aspects),
//         };
//         return italianDecade;
//       }),
//     };
//     return italianSign;
//   });
// }
// module.exports = {translateToItalian, numberTranslation, translateTerm}
