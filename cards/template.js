import { getCardDate } from "../helpers/dates.js";

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
      padding-bottom: .5rem;
      
      
      ">
      
        <h3 style="font-weight: lighter;  margin:0 .3rem; font-size:3.5rem;">${sign}</h3>
      </div>
      <p
      style=" font-size: 1.5rem;"
      >${dateString} </p>
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
