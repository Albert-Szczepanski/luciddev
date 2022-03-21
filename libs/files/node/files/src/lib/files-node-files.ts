import * as fs from 'fs';
import { unlink } from 'fs/promises';
export function filesNodeFiles(): string {
  return 'files-node-files';
}
async function clearFolder(folder){
  fs.readdir(folder, (err, files) => {
    for (let i = 0; i < files.length; i++){
      try {
        unlink(`${folder+files[i]}`);
        console.log(`Plik ${folder+files[i]} został usunięty `);
      } catch (error) {
        console.error('ERROR - Wystąpił Błąd:', error.message);
      }
    }
  });
}

export async function saveFile(tempFileName: string, newFileName: string, fromDirectory: string, toDirectory: string){
  const fs = require('fs');
  const fsPromises = fs.promises;
  const path = require("path");
  const copyFrom = path.join(fromDirectory, tempFileName);
  const copyTo = path.join(toDirectory, newFileName);

  if (!fs.existsSync(toDirectory)){
      await fsPromises.mkdir(toDirectory)
  }
  if (!fs.existsSync(copyTo)){
    await fsPromises.copyFile(copyFrom, copyTo)
  }
  await fsPromises.unlink(copyFrom)
}
