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
  // if file does not end with jpeg, jpeg, png or gif return
  if (!file.endsWith('.jpeg') && !file.endsWith('.jpg') && !file.endsWith('.png') && !file.endsWith('.gif')) return;

  const filePath = path.join(__dirname, 'input', file);
  Jimp.read(filePath).then((image) => {
    const fileNameWithoutExtension = path.basename(file, path.extname(file));
    // Big Image
    image
      .resize(heightBig, Jimp.AUTO)
      .quality(compressionRate)
      .write(path.join(__dirname, 'output', fileNameWithoutExtension + '_BIG.' + image.getExtension()));
    // Thumbnail
    image
      .resize(heightThumpnail, Jimp.AUTO)
      .quality(compressionRate)
      .write(path.join(__dirname, 'output', fileNameWithoutExtension + '_Thumpnail.' + image.getExtension()));
  });
});
