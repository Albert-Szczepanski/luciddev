export async function clearFolder(directory: string){
  const fs = require('fs');
  const fsPromises = fs.promises;
  await fsPromises.readdir(directory, (err, files) => {
    for (let i = 0; i < files.length; i++){
      try {
        fsPromises.unlink(`${directory+files[i]}`);
      } catch (error) {
        console.log(error)
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

export async function makeDir(dir:string){
  const fs = require('fs');
  const fsPromises = fs.promises;
  if (!fs.existsSync(dir)){
    await fsPromises.mkdir(dir)
  }
}
