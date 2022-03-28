import { Injectable } from '@nestjs/common';
import * as files from "@luciddev/files/node/files"

@Injectable()
export class ImagesService {
  mainDir = '_temp/'

  async saveImages(localUserId: string, file: Express.Multer.File) {
    await files.saveFile(file.filename, file.originalname, file.destination, this.mainDir+localUserId+'/lastImages')
  }

  async convertImages(){

  }

  private async renameImage(){

  }

  private async scaleImage(){

  }

  private async imageToGrayscale(){

  }

}
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
