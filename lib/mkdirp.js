

module.exports = function(screwdriver) {

    return function (dir, mode, callback) {
        callback = callback || function () {};
        setTimeout(function() {
            callback(screwdriver.mkdirpSync(dir, mode));
        }, 0);
    }
    
};

