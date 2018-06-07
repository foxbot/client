module.exports.toCamelCase = function(value) {
	value = value.split('_').map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join('');
	return value.charAt(0).toLowerCase() + value.slice(1);
};

module.exports.hexToInt = function(hex) {return parseInt(hex.replace(/#/, ''), 16);}
module.exports.rgbToInt = function(r, g, b) {return ((r & 0x0ff) << 16) | ((g & 0x0ff) << 8) | (b & 0x0ff);}
module.exports.intToRGB = function(int) {return {r: (int >> 16) & 0x0ff, g: (int >> 8) & 0x0ff, b: int & 0x0ff};}
module.exports.intToHex = function(int, hashtag) {return ((hashtag) ? '#' : '') + int.toString(16).padStart(6, '0');}