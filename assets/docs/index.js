const path = require('path');
const webfontsGenerator = require('webfonts-generator');
const {getIconsFromDirectory} = require('../../core/util');

const DIR_ICONS = path.resolve(__dirname, '../icons/');
const DIR_CSS = path.resolve(__dirname, '/templates')
const icons = getIconsFromDirectory(DIR_ICONS);
console.log(icons);

webfontsGenerator({
    files: icons,
    dest: `${__dirname}/templates`,
    html : true,
    fontName : 'fonts',
    types : ['eot', 'woff2', 'woff', 'ttf', 'svg'],
    order : ['eot','ttf', 'woff', 'woff2', 'svg'],
    classPrefix: 'icon-',
    baseSelector: '.icon'
 
  }, (error) =>{
    if (error) {
      console.log('Error', error);
    } else {
      console.log('Iconfonts-build');
    }
  })