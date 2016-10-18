
module.exports = function(screwdriver) {
    
    var path = require('path');
    var fs = require('fs');

    return function (dir, mode) {

        mode = mode || '0777';
        var intMode = parseInt(mode, 8) & (~process.umask());
        dir = path.resolve(dir);
        
        var dirs = dir.split('/');
        if (dirs.length == 1) {
            dirs = dir.split('\\');
        }

        var newdir = '';

        for (var t=0; t<dirs.length; t++) {
            newdir = newdir == '' ? dirs[t] : newdir+'/'+dirs[t];
            try {
                fs.mkdirSync(newdir, intMode);
            } catch (error) {
                if (error.code == 'EEXIST') {
                    continue;
                }
            }
        }
        
        return true;
    };

};
