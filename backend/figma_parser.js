const data = require("./figma.json");

console.log(data);

function parseFigma(obj) {
  const result = {
    name: obj.name,
    tag: null,
    attrs: {},
    style: {
      gap: `${obj.itemSpacing}px`,
      background: `rgba(${obj.background[0].color.r * 255}, ${obj.background[0].color.g * 255}, ${obj.background[0].color.b * 255}, ${obj.background[0].color.a})`,
      padding: `${obj.paddingTop}px ${obj.paddingRight}px ${obj.paddingBottom}px ${obj.paddingLeft}px`,
    },
    childs: []
  };

  obj.children.forEach(child => {
    result.childs.push(parseObj(child))
  });
  return result
}
