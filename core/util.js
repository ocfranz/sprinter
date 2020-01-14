const fs = require('fs');
const path = require('path');

const getIconsFromDirectory = (dir) => {
    return fs.readdirSync(dir).reduce(function(list, file) {
        var name = path.join(dir, file);
        var isDir = fs.statSync(name).isDirectory();
        return list.concat(isDir ? getIconsFromDirectory(name) : [name]);
      }, []);
}

module.exports = {getIconsFromDirectory}