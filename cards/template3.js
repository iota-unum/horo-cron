export function generateTemplate(sign, horoscope, timestamp) {
    return `  <article style="height: 100%; display: flex; flex-direction: column; width: 100%; background-color: #6366f1; padding: 2rem;  line-height:120%; color: #ea0b1a; background-image: url(https://res.cloudinary.com/dvvbrph5g/image/upload/v1683914226/astrocardbg_ibavca.png)">
    <h1 style="font-size: 3.5rem; display:flex;">${sign}</h1>
    <div style="display: flex; font-size: 1.6rem; flex-direction: column; border-radius: 6px; border-width: 1px;">
     ${horoscope}</div>${timestamp}</article>
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
  