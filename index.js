// get content of input folder as array
const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');
const input = fs.readdirSync(path.join(__dirname, 'input'));

const heightBig = 256;
const heightThumpnail = 128;

// loop through input folder
input.forEach((file) => {
  const test = path.join(__dirname, 'input', file);
  Jimp.read(test).then((image) => {
    const fileNameWithoutExtension = path.basename(file, path.extname(file));
    image
      .resize(heightBig, Jimp.AUTO)
      .write(path.join(__dirname, 'output', fileNameWithoutExtension + '_BIG.' + image.getExtension()));
    image
      .resize(heightThumpnail, Jimp.AUTO)
      .write(path.join(__dirname, 'output', fileNameWithoutExtension + '_Thumpnail.' + image.getExtension()));
  });
});
