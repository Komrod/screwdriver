

var screwdriver = {};


/**
 ***********************************************************************************************************
 * MATH
 ***********************************************************************************************************
 */

/*
 * Returns a random float number between min and max, included.
 * @method randFloat
 * @return {number} Float number
 */
screwdriver.randFloat = function(min, max) {
    return Math.random() * (max - min) + min;
};

/**
 * Returns a random integer between min and max, included. Each Integer have the same distribution.
 * @method randInt
 * @return {number} Integer number
 */
screwdriver.randInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


/**
 ***********************************************************************************************************
 * ARRAY
 ***********************************************************************************************************
 */

/**
 * @method unique
 */
screwdriver.unique = function(arr) {
    var o = {},
        i,
        l = arr.length,
        r = [];
    for (i = 0; i < l; i++) {
        o[arr[i]] = arr[i];
    }
    for (i in o) {
        r.push(o[i]);
    }
    return r;
};

/**
 * Check if the value is in the array
 * @param arr The array to check
 * @return {boolean} True if the value is in the array
 * @method inArray
 */
screwdriver.inArray = function(arr, value) {
    return (arr.indexOf(value) != -1);
};


screwdriver.each = function(array, fn, args) {
    var i;

    if (!this.isArray(array)) array = [].slice.call(array);
    var length = array.length;
    args = args || [];
    if (length) {
        if (this.isFunction(fn)) {
            for (i in array) fn.apply(array[i], args);
        } else if (this.isString(fn)) {
            for (i in array)
                if (array[i][fn] && this.isFunction(array[i][fn])) array[i][fn].apply(array[i], args);
        }
    }
    return this;
};


/**
 ***********************************************************************************************************
 * FILE
 ***********************************************************************************************************
 */

/**
 * @method getExtension
 */
screwdriver.getExtension = function(str) {
    var ext = str.split('.').pop();
    if (ext == str) {
        return '';
    }
    return ext;
};

/**
 * @method getFilename
 */
screwdriver.getFilename = function(str) {
    return str.split('/').pop();
};

/**
 * @method getDir
 */
screwdriver.getDir = function(str) {
    if (str.lastIndexOf("/") == -1) return '';
    return str.substring(0, str.lastIndexOf("/") + 1);
};

/**
 * @method getNoExtension
 */
screwdriver.getNoExtension = function(str) {
    var filename = this.getFilename(str);
    if (filename.lastIndexOf(".") == -1) return filename;
    return filename.substring(0, filename.lastIndexOf("."));
};

screwdriver.mkdirpSync = function(dir, mode) {
    var path = require('path');
    var fs = require('fs');

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

screwdriver.mkdirp = function(dir, mode, callback) {
    callback = callback || function () {};
    setTimeout(function() {
        callback(this.mkdirpSync(dir, mode));
    }, 0);
};


/**
 ***********************************************************************************************************
 * TYPE
 ***********************************************************************************************************
 */

/**
 * @method isInt
 */
screwdriver.isInt = function(value) {
    if (this.isString(value)) return false;
    if ((parseFloat(value) == parseInt(value)) && !isNaN(value)) return true;
    return false;
};

/**
 * @method isArray
 */
screwdriver.isArray = function(value) {
    return Object.prototype.toString.call(value) === "[object Array]";
};

/**
 * @method isBoolean
 */
screwdriver.isBoolean = function(value) {
    return typeof value == "boolean";
};

/**
 * @method isUndefined
 */
screwdriver.isUndefined = function(value) {
    return value === undefined || value === null;
};

/**
 * @method isString
 */
screwdriver.isString = function(value) {
    return typeof value == "string";
};

/**
 * @method isRegex
 */
screwdriver.isRegexp = function(value) {
    return (value instanceof RegExp);
};

/**
 * Returns True if fn is a function
 * @method isFunction
 */
screwdriver.isFunction = function(fn) {
    return fn !== undefined && fn && {}.toString.call(fn) === "[object Function]";
};

/**
 * Returns True if obj is an object
 * @method isObject
 */
screwdriver.isObject = function(obj) {
    if (this.isString(obj) || this.isArray(obj)) return false;
    return obj !== null && typeof obj === "object";
};

/**
 * Returns True if string is a hex color (#ffffff)
 * @method isObject
 */
screwdriver.isHex = function(hex) {
    var isHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return isHex ? true : false;
};

/**
 * Returns True if string is a short hex color (#fff)
 * @method isObject
 */
screwdriver.isHexShort = function(hex) {
    var isHexShort = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);
    return isHexShort ? true : false;
};

/**
 ***********************************************************************************************************
 * STRING
 ***********************************************************************************************************
 */

/**
 * Trim string left and right
 * @param  {string} str String to trim
 * @return {string} Result string
 */
screwdriver.trim = function(str) {
    return str.replace(/^\s+|\s+$/g, '');
};

/**
 * Left trim string
 * @param  {string} str String to trim
 * @return {string} Result string
 */
screwdriver.ltrim = function(str) {
    return str.replace(/^\s+/, '');
};

/**
 * Right trim string
 * @param  {string} str String to trim
 * @return {string} Result string
 */
screwdriver.rtrim = function(str) {
    return str.replace(/\s+$/, '');
};

/**
 * Trim string left and right, merge multiple spaces inside the string into one space
 * @param  {string} str String to trim
 * @return {string} Result string
 */
screwdriver.xtrim = function(str) {
    return str.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
};


/**
 * @method contains
 */
screwdriver.contains = function(str, search) {
    return (str + '').indexOf(search) > -1;
};





screwdriver.quickSort = (function() {

    function partition(array, left, right, compare) {
        var minEnd = left,
            maxEnd;
        for (maxEnd = left; maxEnd < right - 1; maxEnd += 1) {
            if (compare(array[maxEnd], array[right - 1])) {
                swap(array, maxEnd, minEnd);
                minEnd += 1;
            }
        }
        swap(array, minEnd, right - 1);
        return minEnd;
    }

    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        return array;
    }

    function quickSort(array, left, right, compare) {
        if (left < right) {
            var p = partition(array, left, right, compare);
            quickSort(array, left, p, compare);
            quickSort(array, p + 1, right, compare);
        }
        return array;
    }

    return function(array, compare) {
        return quickSort(array, 0, array.length, compare);
    };
}());


/**
 ***********************************************************************************************************
 * TIME
 ***********************************************************************************************************
 */


if (window.performance.now) {
    screwdriver.getTime = function() {
        return this.startTime + window.performance.now();
    };
} else {
    screwdriver.getTime = function() {
        return +new Date();
    };
}


/**
 ***********************************************************************************************************
 * VECTOR
 ***********************************************************************************************************
 */


// Converts from degree to radian
screwdriver.degreeToRadian = function(d) {
  return d * Math.PI / 180;
};
 

// Converts from radian to degree
screwdriver.radianToDegree = function(r) {
  return r * 180 / Math.PI;
};


screwdriver.normalize = function(x, y) {
    var length = Math.sqrt(x*x + y*y);
    x /= length;
    y /= length;
    return {x: x, y: y, force: length};
};


/**
 ***********************************************************************************************************
 * COLOR
 ***********************************************************************************************************
 */

screwdriver.hexToRgb = function(hex) {
    var result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};


screwdriver.normalizeHex = function(hex) {
    var result = /^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);
    return result ? '#' + result[1] + result[1] + result[2] + result[2] + result[3] + result[3] : hex;
};


screwdriver.rgbToHex = function(rgb) {
    return "#" +
        ("0" + parseInt(rgb.r, 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb.g, 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb.b, 10).toString(16)).slice(-2);
};







module.exports = screwdriver;

 
