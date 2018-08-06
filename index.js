var jsType = {};
"Boolean|Number|String|Function|Array|Date|RegExp|Object|Error".split("|").forEach(function(item) {
    jsType["is" + item] = function(obj) {
        return {}.toString.call(obj) == "[object " + item + "]";
    };
});
export default jsType;