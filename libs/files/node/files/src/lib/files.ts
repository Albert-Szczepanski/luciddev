export async function clearFolder(directory: string){
  const fs = require('fs');
  const fsPromises = fs.promises;
  await fsPromises.readdir(directory, (err, files) => {
    for (let i = 0; i < files.length; i++){
      try {
        fsPromises.unlink(`${directory+files[i]}`);
      } catch (error) {

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
      await makeDir(toDirectory);
  }
  if (!fs.existsSync(copyTo)){
    await fsPromises.copyFile(copyFrom, copyTo)
  }
  await fsPromises.unlink(copyFrom)
}

export async function renameFile(fromDir: string, toDir: string){
  const fs = require('fs');
  const fsPromises = fs.promises;
  if (!fs.existsSync(fromDir))return;
  await fsPromises.rename(fromDir, toDir)
}

export async function makeDir(dir:string){
  const fs = require('fs');
  const fsPromises = fs.promises;
  const arr = dir.split('/')
  let dirStr = ''
  for (let i = 0; i < arr.length; i++){
    dirStr += arr[i] + '/';
    if (!fs.existsSync(dirStr)){
      await fsPromises.mkdir(dirStr)
    }
  }
}
