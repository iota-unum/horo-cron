
  import { ChatGPTAPI } from "chatgpt";
  import fs from "fs/promises";
  import path from "path";
import { formatColonsToJsDashes } from "../helpers/dates.js";
import { getPrompts } from "./horoscope-lib/getPrompts.js";


  const model = `"Ciao Toro, oggi la tua carriera potrebbe essere al centro delle tue preoccupazioni. La Luna in quadratura in Aquario nella decima casa ti incoraggia a cercare nuove opportunità professionali e a raggiungere i tuoi obiettivi lavorativi.\n\nLa congiunzione della Luna con Plutone in Aquario nella decima casa suggerisce che il successo arriverà solo se sarai disposto a lasciare andare vecchi schemi e ad abbracciare nuovi modelli di comportamento.\n\nIl trigono della Luna con Venere in Gemelli nella seconda casa può portare una buona notizia finanziaria o un contratto interessante.\n\nTuttavia, devi stare attento alla quadratura della Luna con Mercurio in Toro nella prima casa, poiché potresti avere difficoltà a comunicare le tue idee e dovrai fare uno sforzo maggiore per convincere gli altri.\n\nIn generale, sii aperto al cambiamento e fidati del tuo istinto quando si tratta di prendere decisioni importanti in ambito professionale ed economico." `;
  export async function getHoroscopes(date) {
    console.log(date, 'date from getHoroscopes')
      const testPrompt = [getPrompts(date)[11]];
      const prompts = getPrompts(date);
      try {
           const api = new ChatGPTAPI({
             apiKey: process.env.OPENAI_API_KEY,
             completionParams: {
               temperature: 0.9,
               presence_penalty: 2
             },
           });
         const output = [];
         for (const prompt of prompts) {
           console.log("PARTITO!!!");
           // const fullPrompt = `Per il segno zodiacale ${rompt.sign} questi gli aspetti di oggi: ${prompt.moonPrompts}. Basandoti sul significato di questi aspetti, scrivi un oroscopo del giorno, in italiano impeccabile senza errori grammaticali, che sia spiritoso  e originale, come quelli che si trovano su riviste e quotidiani. Non superare le 170 parole. Tieni presente che se in un aspetto c'è opposizione o quadratura, anche la congiunzione e il trigono sono negativi (es. luna congiunzione giove, ma con luna o giove in opposizione al segno, è aspetto totalmente negativo). Sii onesto ma incoraggiante.`;
           const fullPrompt = `Per il segno zodiacale ${prompt.sign} questi gli aspetti di oggi: ${prompt.moonPrompts}. Scrivi un oroscopo del giorno, brillante e originale, in italiano impeccabile senza errori grammaticali. Se un aspetto presenta un'opposizione o una quadratura, anche la congiunzione e il trigono associati sono considerati negativi. Per favore, evita di presentare gli aspetti positivi come tali se il segno è in opposizione o quadratura rispetto a un pianeta coinvolto. Sii onesto e preciso, ma incoraggiante. non superare le 160 parole ` 
           const response = await api.sendMessage(fullPrompt);
           const text = response.text;
           console.log(text)
           output.push({
             sign: prompt.sign,
             date: prompt.date,
             horoscope: text,
           });
         }

         console.log("FATTO!!!");
         // Save the output array to a JSON file in the public folder
        //  const fileName = formatColonsToJsDashes(date)
        //  const filePath = path.join(process.cwd(), "jsons" ,`${fileName}.json`);
        //  await fs.writeFile(filePath, JSON.stringify(output));
         return output
     
       } catch (error) {
         console.log(error)
       }

   }
  
