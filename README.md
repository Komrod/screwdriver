# Screwdriver

A toolkit adding very helpfull functions to your node scripts.

There is some functions missing in Javascript and node scripts, like checking if a file exists or trimming a string, manipulating HTML colors and easily check the type of a value.

Example in a node js script :
```
	var sd = require('node-screwdriver');
	console.log('Show extension: '+sd.getExtension('myImage.png'));
```

## Polyfill

You can use the function polyfill() to add methods to the javascript objects and prototypes so it's more easy to use.

Added to all instances of the String objects:
- getExtension
- getNoExtension
- getFilename
- getDir
- fileExists
- dirExists
- isHex
- isHexShort
- trim
- ltrim
- rtrim
- xtrim
- contains
- endWith
- startsWith

Added to all instances of the Array objects:
- quickSort

```
	require('node-screwdriver').polyfill();
	var str = '/path/to/file/myImage.png';
	console.log('Extension: '+str.getExtension());
	console.log('Is a file: '+str.fileExists());
```

Added to Math object:
- randFloat
- randInt

Added to Object:
- isInt
- isFloat
- isDefined
- isUndefined
- isBoolean
- isRegexp
- isString
- isObject


```
	require('node-screwdriver').polyfill();
	console.log('Random int: '+Math.randInt(0, 100));
	console.log('PI is float: '+Object.isFloat(3,14159));
```

You can also use the methods without polyfill.


## MATH

### randFloat (min, max)
Returns a random float number between min and max, included.

### randInt (min, max)
Returns a random integer between min and max, included. Each Integer have the same distribution.

## ARRAY

### unique (arr)
Returns array with unique values

### inArray (arr, value)
Returns true if value is in the array

### each (arr, fct, args)
Execute a function for each element of an array


## TIME

### getDateTime ()
Get the date and time with the format "Y-m-d H:i:s"


## FILE

### getExtension (path)
Get the extension of a file path

### getFilename (path)
Get the filename (name and extension) of a file path

### getDir (path)
Get the directory of a file path (without the filename)

### getNoExtension (path)
Get the filename without the extension of a path

### mkdirpSync (dir, mode)
Synchronous mkdirp, create directory and parent directories if needed, similar to command "mkdir -p"

### mkdirp (dir, mode, callback)
Create directory and parent directories if needed, similar to command "mkdir -p"

### fileExists (path)
Returns true if the path exists and is a file

### dirExists (path)
Returns true if the path exists and is a directory


## TYPE

### isInt (value)
Returns true if the value is an integer

### isArray (value)
Returns true if the value is an array

### isBoolean (value)
Returns true if the value is a boolean

### isUndefined (value)
Returns true if the value is undefined

### isDefined (value)
Returns true if the value is defined

### isString (value)
Returns true if the value is a string

### isRegexp (value)
Returns true if the value is a regular expression

### isFunction (value)
Returns true if the value is a function

### isObject (value)
Returns true if the value is an object

### isHex (value)
Returns true if the string value is a hexadecimal HTML color (#FFFFFF)

### isHexShort (value)
Returns true if the string value is a short hexadecimal HTML color (#FFF)


## STRING

### trim (str)
Return trimmed string, remove left and right space characters

### ltrim (str)
Return left trimmed string, remove left space characters

### rtrim (str)
Return right trimmed string, remove right space characters

### xtrim (str)
Return trimmed string and replace multiple space characters with a single space character

### contains (str, search)
Returns true if the search is contained in str

### endsWith (str, search)
Returns true if the search is at the end of str

### startsWith (str, search, position)
Returns true if str begins with search, optional starts at position


## VECTOR

### degreeToRadian (d)
Converts degree to radian

### radianToDegree (r)
Converts radian to degree

### normalize (x, y)
Return a normalize vector object


## COLOR

### hexToRgb (str)
Converts hexadecimal HTML color (#FFF or #FFFFFF) to RGB object {r,g,b}

### rgbToHex (str)
Converts RGB object {r,g,b} to hexadecimal HTML color (#FFFFFF)

### normalizeHex (str)
Converts short hexadecimal HTML color (#FFF) to full hexadecimal HTML color (#FFFFFF) if needed


## Changelog

### V0.1.4
- Polyfill function
- Fix small bugs
- Add type functions to Object

