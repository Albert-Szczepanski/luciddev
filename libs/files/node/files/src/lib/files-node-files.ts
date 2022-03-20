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
