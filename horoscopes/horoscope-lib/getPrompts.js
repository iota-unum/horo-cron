import { translate } from "./translation.js";
import {getGlobalOverview} from './formatData.js'

 export function getPrompts(date) {
  const globalOverview = getGlobalOverview(date);
  const translatedOverview = translate(globalOverview);


  const prompts = translatedOverview.map(obj =>{

    const {aspects} = obj
    const {moonOverview} = obj
    console.log('MOONOVERVIEW', moonOverview)
    const {position:{moonSign, moonHouse, moonAspectWithSign, }} = moonOverview
    // console.log('PLANETASPECTWITHSIGN', moonHouse)
    const moonAspectsPrompts = moonOverview.moonAspects.reduce((acc, curr)=> acc + `luna in ${curr.aspect} con ${curr.planet} ${curr.planetAspectWithSign ? ` (che è in  ${curr.planetAspectWithSign} col vostro segno)` : ''} in ${curr.sign} in ${curr.house} casa; `, `la luna è ${moonAspectWithSign && 'in'} ${moonAspectWithSign} in ${moonSign} nella ${moonHouse} casa e forma i seguenti aspetti: `);


    const aspectPrompts = aspects.map(asp =>{
        return  asp.decadeAspects.reduce((acc, curr) => acc + `${curr.planet} in ${curr.aspect} in ${curr.house} casa, `, ` la ${asp.decade} decade ha: `);
        
    })
    // console.log(JSON.stringify(moonAspectsPrompts, null, 4))

    return {sign: obj.sign, date, aspects: aspectPrompts.join(), moonPrompts: moonAspectsPrompts}
})

return prompts 
}


