const fs = require('fs-extra'),
  path = require('path'),
  YAML = require('yaml');

const content = fs.readJSONSync(path.join(__dirname, './source.json'));

// console.log(content);

Object.keys(content).forEach(speakerId => {
  const { name, photo, socials } = content[speakerId];
  // console.log(socials.filter(sn => sn.icon === 'twitter')[0].link);
  // console.log(name, );
  console.log(`
  - name: ${name}
    photo: ${photo.replace('images/speakers/', 'speakers/2018/')}
    link: ${socials.filter(sn => sn.icon === 'twitter')[0].link}
  `);
});
