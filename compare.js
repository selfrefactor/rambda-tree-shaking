const getSize = require('get-folder-size');
const { mapAsync, toDecimal } = require('rambdax')
const { outputJson } = require('fs-extra')

function getFolderSize(folder){
  return new Promise((resolve => {
    const folderPath = `${__dirname}/packages/${folder}/dist`
    getSize(folderPath, (err, size) => {
      if (err) { throw err; }
     
      return resolve({
        label: folder,
        mb: (size / 1024 / 1024).toFixed(2) + ' MB',
        size: (size / 1024 / 1024).toFixed(2)
      });
    });
  }))
}

void async function compare(){
  const allSizes = await mapAsync(getFolderSize, ['base', 'ramda', 'rambda'])
  const toSave = {
    allSizes,
    ramdaVsRambda: toDecimal(allSizes[1].size - allSizes[2].size),
    ramdaVsBase: toDecimal(allSizes[1].size - allSizes[0].size),
    rambdaVsBase: toDecimal(allSizes[2].size - allSizes[0].size),
  }

  await outputJson(`${__dirname}/compared.json`, toSave, {spaces: 2})
  console.log('done');
  
}()