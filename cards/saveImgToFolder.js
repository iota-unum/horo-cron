import path from 'path'
import { readFile, writeFile } from "node:fs/promises";



export async function saveImgtoFolder(folder, signName, imgBuffer){

    const directory = path.resolve(process.cwd(), folder)
    await writeFile(`${directory}/${signName}.png`, imgBuffer);
    console.log('image SAVED to Folder')
}