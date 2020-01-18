const fs = require('fs-extra'),
  path = require('path'),
  YAML = require('yaml');

const content = fs.readJSONSync(path.join(__dirname, './source.json'));

// console.log(content);

Object.keys(content).forEach(speakerId => {
  const { name, photoUrl, socials = [] } = content[speakerId];
  // console.log(socials.filter(sn => sn.icon === 'twitter')[0].link);
  // console.log(name, );
  const twitterObject = socials.filter(sn => sn.icon === 'twitter');
  console.log(`
  - name: ${name}
    photo: ${photoUrl.replace('images/speakers/', 'speakers/2017/')}
    link: ${twitterObject[0] ? twitterObject[0].link : ''}
  `);
});
