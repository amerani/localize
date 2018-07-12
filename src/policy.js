const { isPunctuation } = require('./utils');

function shouldReplaceJsxText({path, types:t, options}) {
    const { elementsPreserveJsxText } = options;
    const value = path.node.value;
    const parentName = path.parent.openingElement.name.name;
    
    return  value != null &&
            value.trim() !== '' &&
            t.isJSXElement(path.parent) &&
            !elementsPreserveJsxText[parentName] &&
            !isPunctuation(value);
}

function shouldReplaceJsxAttribute({path, types:t, options}){
    const { elementsReplaceStringAttributes } = options;
    const parentName = path.parent.name.name;
    const attrs = elementsReplaceStringAttributes[parentName];
    const attrName = path.node.name.name;

    return  t.isStringLiteral(path.node.value) &&
            attrs &&
            attrs.indexOf(attrName) >= 0;
}

module.exports = {
    shouldReplaceJsxText,
    shouldReplaceJsxAttribute
}