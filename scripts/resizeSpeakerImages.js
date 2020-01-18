const fs = require('fs-extra'),
  path = require('path'),
  YAML = require('yaml'),
  sharp = require('sharp');

function resizeFolder(src, dest, size = [150, 150]) {
  fs.ensureDirSync(dest);
  return new Promise((ok, nok) =>
    fs.readdir(src, function(err, filenames) {
      if (err) {
        nok(err);
        return;
      }
      console.log('filenames', filenames);
      filenames.forEach(function(filename) {
        try {
          sharp(path.join(src, filename))
            .resize(size[0], size[1], {
              // kernel: sharp.kernel.nearest,
              fit: 'contain',
              // position: 'right top',
              // background: { r: 255, g: 255, b: 255, alpha: 0.5 },
            })
            .toFile(path.join(dest, filename));
        } catch (error) {
          nok(error);
        }
      });
    }),
  );
}

resizeFolder(
  path.join(__dirname, 'images', '2016'),
  path.join(__dirname, '..', 'static', 'speakers', '2016'),
);

resizeFolder(
  path.join(__dirname, 'images', '2017'),
  path.join(__dirname, '..', 'static', 'speakers', '2017'),
);

resizeFolder(
  path.join(__dirname, 'images', '2018'),
  path.join(__dirname, '..', 'static', 'speakers', '2018'),
);

resizeFolder(
  path.join(__dirname, 'images', '2019'),
  path.join(__dirname, '..', 'static', 'speakers', '2019'),
);
