import { getCardDate } from "../helpers/dates.js";
const zodiacIcons = {
  ariete: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/ariete_q3sgpc.svg',
  toro: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158980/zodiac-icons/toro_xkenf2.svg',
  gemelli: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/gemelli_jqnhcs.svg',
  cancro: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158980/zodiac-icons/cancro_wvnp85.svg',
  leone: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/leone_y0cr0k.svg',
  vergine: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/vergine_b080bw.svg',
  bilancia: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/bilancia_xswnam.svg',
  scorpione: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/scorpione_c3vmnk.svg',
  sagittario: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158979/zodiac-icons/sagittario_pg0k99.svg',
  capricorno: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158979/zodiac-icons/capricorno_g4bwny.svg',
  aquario: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158979/zodiac-icons/aquario_y9w8cz.svg', 
  pesci: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158980/zodiac-icons/pesci_ai0ezq.svg',
}
export function generateTemplate(sign, horoscope, dateString) {
    const textLength = horoscope.split(' ').length
    console.log('TEXTLENGTH', textLength)
    const textFontSize = textLength <= 125 ? '1.7rem' : textLength <= 135? '1.6rem' :'1.5rem'
  return `  <div
    style="
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 1.5rem;
    background-color:orangered;
    color: white;
    font-size:2rem;
      background-size: cover;
    "
  >
  <div style="
  display:flex;
  width: 100%;
  border-bottom: 1px solid white;
  justify-content: space-between;
  align-items: center;
  
  ">

      <div style="display: flex;  opacity: 1;
      align-items: center;
      justify-content: space-between;

      padding-bottom: .5rem;
      
      
      ">
      <h3 style="font-weight: lighter;  margin:0 .3rem; font-size:3.5rem;">${sign}</h3>
      </div>
      <p
      style=" font-size: 1.3rem;"
      >${dateString} </p>
      <img src=${zodiacIcons[sign]} width="50px"alt="" style="margin-left: auto"/>
  </div>

    <p
      style="
      
      
        color: #fff;
        display: flex;
        flex-direction: column;
        font-size: ${textFontSize}
        
      "
    >
      ${horoscope}
    </p>
  </div>
      `;
}

export function generateTemplateb(sign, horoscope, timestamp) {
  `<div tw='flex'>
  
  ${sign}
  
  ${horoscope}
  ${timestamp}
  
  
  
  </div>
  
  
  `;
}
