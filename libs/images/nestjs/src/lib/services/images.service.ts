import {HttpException, Injectable} from '@nestjs/common';
import * as files from "@luciddev/files/node/files"
import * as jimp from "jimp"
const Jimp = require('jimp');

@Injectable()
export class ImagesService {
  mainDir = '_temp/'
  lastImagesDir = '/lastImages'
  grayscaleImagesDir= '/grayscale'
  scaledImagesDir='/scaled'

  async saveImages(localUserId: string, file: Express.Multer.File) {
    await files.saveFile(
      file.filename,
      file.originalname,
      file.destination,
      this.mainDir+localUserId+this.lastImagesDir)
  }

  async convertImages(){

  }

  private async renameImage(){

  }

  private async scaleImage(dir: string){
    const image = await this.getJimpImage(dir)
  }

  private async imageToGrayscale(dir: string){
    const image = this.getJimpImage(dir)
    await image.then(async res => {
      try {
        return await res.greyscale().write(dir)
      }
      catch (err){
        console.log(err)
        throw new HttpException(err, err.code)
      }
    })
  }

  private async getJimpImage(dir: string): Promise<any>{
    return await Jimp.read(dir);
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
