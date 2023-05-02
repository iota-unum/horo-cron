import { getHoroscope } from "./horoscope.js";

export function getPlanetsPositions(date) {
  const horoscope = getHoroscope(date);
  const planets = horoscope.CelestialBodies.all
    .map((p) => {
      const {
        key: planet,
        Sign: { key: sign },
        ChartPosition: {
          Ecliptic: { DecimalDegrees, ArcDegreesFormatted30 },
        },
        isRetrograde,
      } = p;
      const data = {
        planet,
        sign,
        DecimalDegrees,
        ArcDegreesFormatted30,
        isRetrograde,
      };
      return data;
    })
    //filter out sirius
    .filter((p) => p.planet !== "sirius");
  return planets;
}
export function getMoonPosition(date){
 return getPlanetsPositions(date).filter(planet => planet.planet === 'moon')[0]
}
export function getMoonPhase(date) {
  const horoscope = getHoroscope(date);

  const { phaseQuarterString, shapeString, shapeDirectionString } =
    horoscope.Ephemeris.Results[1].position;

  return { phaseQuarterString, shapeString, shapeDirectionString };
}

export function getGeneralAspects(date) {
  const horoscope = getHoroscope(date);
  let planetsToFilterOut = ["sirius", "southnode", "ascendant", "southnode", "northnode", "lilith", "midheaven"]; // array of planets to filter out
  
  // return {planet1: asp.point1key, planet2: asp.point2key, aspect: asp.aspectKey, orb:asp.orb}
  const generalAspects = horoscope.Aspects.all.map((asp) => ({
      planet1: asp.point1Key,
      planet2: asp.point2Key,
      aspect: asp.aspectKey,
      orb: asp.orb,
    }));
    //filte out planets and point i'm not interested in
    let filteredGeneralAspects = generalAspects.filter(
      (obj) =>
        !planetsToFilterOut.includes(obj.planet1) &&
        !planetsToFilterOut.includes(obj.planet2)
    );
  return filteredGeneralAspects;
}
