import { readFile, writeFile } from "node:fs/promises";
import { html } from "satori-html";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import dotenv from 'dotenv'
import  path from 'path'
import { getDataBySign } from "../database/getDataFromDB.js";
import { getItalianTimestamp } from "../helpers/dates.js";
import {generateTemplate,} from './template.js'
import { saveImgtoFolder } from "./saveImgToFolder.js";
dotenv.config()






export async function generateSingleImage(sign, horoscope){
    const timestamp = getItalianTimestamp()
    
  
    
    const template = html(generateTemplate(sign, horoscope, timestamp));
    
    // convert html to svg
    const fontPath = path.resolve("./cards/Roboto-Regular.ttf")
    const svg = await satori(template, {
        width: 600,
        height: 800,
        fonts: [
            {
                name: "Roboto",
                data: await readFile(fontPath),
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
//    console.log(outputPath, 'PROCESSCWD')
    // await writeFile("./output.png", pngBuffer);
    return pngBuffer
    
    
    
    
    
    
}