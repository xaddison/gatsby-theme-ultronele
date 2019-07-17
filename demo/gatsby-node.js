const fs = require('fs-extra')

exports.onPreInit = () => {
  console.log('>>>> demo pre build...');
  let folder = './cache';
  // fs.emptyDirSync(folder);
}
