const fs = require('fs-extra'),
  path = require('path'),
  YAML = require('yaml');

fs.readdir(path.join(__dirname, './source'), function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }
  let list = [];
  filenames.forEach(function(filename) {
    fs.readFile(path.join(__dirname, './source', filename), 'utf-8', function(
      err,
      content,
    ) {
      if (err) {
        onError(err);
        return;
      }
      let name,
        photo,
        link = '';
      YAML.parseDocument(content).contents.items.forEach(item => {
        const key = item.key.value;
        // if (!item.value || !item.value.value) return;

        if (key === 'name') {
          name = item.value.value;
        }
        if (key === 'photoURL') {
          const value = item.value.value;
          photo = value.replace('images/speakers/', 'speakers/2019/');
        }
      });

      var urlRegex = /(https?:\/\/twitter[^ ]*)/;
      if (content.match(urlRegex)) {
        const twitter = content.match(urlRegex)[1];
        link = twitter.split("'")[0];
      }

      console.log(`
      - name: ${name}
        photo: ${photo}
        link: ${link}
      `);
    });
  });
});
