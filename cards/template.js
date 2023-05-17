import { getCardDate } from "../helpers/dates.js";
const colors = {
    orange: 'orangered',
    purple: '#7957ff',
    green: '#00bb7d',
    blue: '#1c9bf1',
}
const {orange, green, purple, blue} = colors

const zodiacIcons = {
    ariete: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/ariete_q3sgpc.svg', color: orange },
    toro: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158980/zodiac-icons/toro_xkenf2.svg', color: green },
    gemelli: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/gemelli_jqnhcs.svg', color: purple },
    cancro: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158980/zodiac-icons/cancro_wvnp85.svg', color: blue },
    leone: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/leone_y0cr0k.svg', color: orange},
    vergine: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/vergine_b080bw.svg', color: green },
    bilancia: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/bilancia_xswnam.svg', color: purple },
    scorpione: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158978/zodiac-icons/scorpione_c3vmnk.svg', color: blue},
    sagittario: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158979/zodiac-icons/sagittario_pg0k99.svg', color: orange },
    capricorno: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158979/zodiac-icons/capricorno_g4bwny.svg', color: green },
    aquario: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158979/zodiac-icons/aquario_y9w8cz.svg', color: purple },
    pesci: { icon: 'https://res.cloudinary.com/dvvbrph5g/image/upload/v1684158980/zodiac-icons/pesci_ai0ezq.svg', color: blue }
  };
  
  


export function generateTemplate(sign, horoscope, dateString) {
    const textLength = horoscope.split(' ').length
    console.log('TEXTLENGTH', textLength)
    // const textFontSize = textLength <= 125 ? '1.7rem' : textLength <= 135? '1.6rem' :'1.4rem'
    const textFontSize = horoscope.length <= 800 ? '1.7rem' : horoscope.length <= 935 ? '1.6rem' : horoscope.length <= 1000 ? '1.5rem' : '1.4rem'
  return `  <div
    style="
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 1.5rem;
    background-color:${zodiacIcons[sign].color};
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
  padding: 0;
  padding-bottom: 1.2rem;
  position: relative;
  z-index: -1;
  
  ">


    
      <h3 style="font-weight: lighter;  margin:0 .3rem; font-size:3.5rem; margin : 0;">${sign}</h3>
      <img src=${zodiacIcons[sign].icon} width="60px"alt="" style="margin: 0"/>
      
  </div>
  <p style=" 
  margin: 0 auto;
  align-self: center;
  justify-self: center;
  position: relative;
  transform: translateY(-50%);
  background: ${zodiacIcons[sign].color};
  padding: 10px;
  font-size: 1rem; margin: 0;">${dateString} </p>

    <p
      style="
     
        color: #fff;
        display: flex;
        flex-direction: column;
        font-size: ${textFontSize};
        margin: .5rem;
        
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
