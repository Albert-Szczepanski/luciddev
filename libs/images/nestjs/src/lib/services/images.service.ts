import { Injectable } from '@nestjs/common';
import {ImagesInterface} from "@luciddev/images/core";
import * as files from "@luciddev/files/node/files"
import {doc} from "prettier";
import debug = doc.debug;

@Injectable()
export class ImagesService {
  getData(): { message: string } {
    return { message: 'Welcome to imagerezz!' };
  }

  async saveImages(localUserId: string, file: Express.Multer.File) {
    await files.saveFile(file.filename, file.originalname, file.destination, '_temp/'+localUserId)
  }
}
//
// import * as fs from 'fs';
// import { unlink } from 'fs/promises';
// import jimp from 'jimp';
// import { copyFile } from 'fs/promises';
// import { appendFile } from 'fs';
//
// const jimp = jimp
// const inputFolder = './Input/';
// const tempFolder = './Temp/';
// const resultFolder = './Result/';
// const finalJpgs = './ResultJPG/'
//
// function convert(){
//   console.log('Konwersja w toku...')
//   fs.readdir(inputFolder, (err, files) => {
//     files.forEach(async file => {
//       await scalePhoto(file, file, 640, true)
//       await scalePhoto(file, file + '_m', 150, true)
//       await scalePhoto(file, file + '_mg', 150, false)
//     });
//   });
// }
//
// async function clearFolder(folder){
//   fs.readdir(folder, (err, files) => {
//     files.forEach(file => {
//       try {
//         unlink(`${folder+file}`);
//         console.log(`Plik ${folder+file} został usunięty `);
//       } catch (error) {
//         console.error('ERROR - Wystąpił Błąd:', error.message);
//       }
//     });
//   });
// }
//
// async function scalePhoto(file, newFileName, size, isColor) {
//   await copyFile(inputFolder+file, tempFolder+newFileName+'.jpg');
//   const image = await jimp.read(`${tempFolder+newFileName+'.jpg'}`);
//   await image.resize(size, jimp.AUTO);
//   let msgSize = size+'px'
//   if (!isColor){
//     await image.color([{ apply: 'greyscale', params: [100] }]);
//     msgSize = size+'px (nadana skala szarości)'
//   }
//   await image.writeAsync(`${resultFolder+newFileName}`);
//   await copyFile(resultFolder+newFileName, finalJpgs+newFileName+'.jpg');
//   let date = new Date()
//   let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
//   appendFile('Logs.txt', `${date.toLocaleDateString('pl-PL') + ' ' + time} :
//     Zdjęcie ${file} zostało przekonwertowane do ${msgSize}
//     i przeniesione do ${resultFolder+newFileName} \n`,
//     (err) => {
//       if (err) throw err;
//     });
//   console.log(`Zdjęcie ${file} zostało przekonwertowane do ${msgSize} i przeniesione do ${resultFolder+newFileName}`)
// }
//
// async function runConverter(){
//   await clearFolder(tempFolder);
//   await clearFolder(resultFolder);
//   await clearFolder(finalJpgs);
//   await convert()
// }
//
//
// runConverter();
