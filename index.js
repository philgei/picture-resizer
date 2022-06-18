// get content of input folder as array
const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');
const input = fs.readdirSync(path.join(__dirname, 'input'));

const heightBig = 1920;
const heightThumpnail = 169;
const compressionRate = 50;

// loop through input folder
input.forEach((file) => {
  const test = path.join(__dirname, 'input', file);
  Jimp.read(test).then((image) => {
    const fileNameWithoutExtension = path.basename(file, path.extname(file));
    image
      .resize(heightBig, Jimp.AUTO)
      .quality(compressionRate)
      .write(path.join(__dirname, 'output', fileNameWithoutExtension + '_BIG.' + image.getExtension()));
    image
      .resize(heightThumpnail, Jimp.AUTO)
      .quality(compressionRate)
      .write(path.join(__dirname, 'output', fileNameWithoutExtension + '_Thumpnail.' + image.getExtension()));
  });
});
