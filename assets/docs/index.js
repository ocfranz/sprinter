const path = require('path');
const fs = require('fs');
const webfontsGenerator = require('webfonts-generator');
const {getIconsFromDirectory} = require('../../core/util');

const DIR_ICONS = path.resolve(__dirname, '../icons/');
const DIR_CSS = path.resolve(__dirname, '/templates');
const CSS_DEST = path.resolve(__dirname, "../../src/scss/_icons.scss");
const icons = getIconsFromDirectory(DIR_ICONS);

webfontsGenerator({
    files: icons,
    dest: `${__dirname}/templates`,
    html : true,
    fontName : 'webfonts',
    types :['eot', 'woff2', 'woff', 'ttf', 'svg'],
    order : ['eot', 'ttf', 'woff2', 'woff', 'svg'],
    cssDest : `${__dirname}/demo.scss`,
    cssFontsUrl : "#{$font-path}",
    classPrefix: 'icon-',
    baseSelector: '.icon'
 
  }, (error) =>{
    if (error) {
        

    } else {
        const fontsFiles = [
            `/webfonts.eot`,
            `/webfonts.svg`,
            `/webfonts.ttf`,
            `/webfonts.woff`,
            `/webfonts.woff2`
        ];
        fontsFiles.map((k)=>{
            fs.createReadStream(path.resolve(__dirname,`./templates${k}`))
                .on('data', ()=>{
                    fs.copyFileSync( 
                        path.resolve(__dirname,`./templates${k}`),
                        path.resolve(__dirname, `../fonts${k}`),
                        (err)=>{console.log(err?err:'Done')}
                    );
                })
                .on('error', (err)=>console.error);
        });
        fs.createReadStream( `${__dirname}/demo.scss`,)
            .on('data', ()=>{
                fs.copyFileSync(
                    `${__dirname}/demo.scss`,
                     CSS_DEST,
                     (err)=>{console.log(err?err:'Done')}
                 )
            })
            .on('error',err=>console.log(err));
        console.log('.....build done');
        console.log('Iconfonts-build');
    }
})

