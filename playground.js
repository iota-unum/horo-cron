import { readFile, writeFile } from "node:fs/promises";
import { html } from "satori-html";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import dotenv from 'dotenv'
dotenv.config()

import { getDataBySign, getDataFromDB , connectToDB} from "./database/getDataFromDB.js";
import { getFormattedDate } from "./helpers/dates.js";
import process from "process";
const timestamp = 'timestamp'
const dateString = getFormattedDate(0).dateDashes

console.log(process.env.MONGO_URI, 'MONGOOOOOOURIIIIIII')

const sign = 'toro'
const data = await  getDataBySign(sign, dateString)
const { horoscope, date } = data[0];
console.log(horoscope)

const template = html(`
<div
        style="
          height: 800px;
          width: 600px;
          backgroundImage:
            url(https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXVyb3JhJTIwYm9yZWFsaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60);
          backgroundSize: cover;
          display: flex;
          justifyContent: center;
          alignItems: center;
          color: white;
       "
      >
        <div
          style="
            background: rgba( 255, 255, 255, 0.2 );
            boxShadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdropFilter: blur( 10px );
            WebkitBackdropFilter: blur( 10px );
            borderRadius: 10px,
            border: 1px solid rgba( 255, 255, 255, 0.18 );
            fontSize: 2rem;
            width: 90%;
            height: 90%;
            padding: 2rem;,
            color: #ccc;
            display: flex;
            flexDirection: column;
         "
        >
          <h1 style="
            fontSize:50px; display:flex
         " >${sign}</h1>
          <p style="
            fontSize:20px;
            display:flex
         " >${horoscope}</p>
          <p style="display:flex">${timestamp}</p>
        </div>
      </div>
`);

// convert html to svg
const svg = await satori(template, {
  width: 600,
  height: 800,
  fonts: [
    {
      name: "Roboto",
      data: await readFile("./Roboto-Regular.ttf"),
      weight: 700,
      style: "normal",
    },
  ],
});

// render png
const resvg = new Resvg(svg, {
  background: "rgba(238, 235, 230, .9)",
});
const pngData = resvg.render();
const pngBuffer = pngData.asPng();

await writeFile("./output.png", pngBuffer);