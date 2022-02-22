export default {
  map: {
    'VERTICAL': 'column',
    'HORIZONTAL': 'row',
  },
  rgba({ r = 1, g = 1, b = 1, a = 1 }) {
    return `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${a})`;
  },
  // TODO
  parse(obj) {
    const result = {
      childs: [],
      style: {
        background: this.background(obg.background)
      }
    };
    obj.children.forEach((child) => {
      result.childs.push(this.parse(child));
    });
    return result;
  },

  // TODO
  background(bg = []) {
    const result = ''
    bg.forEach((item) => {
      switch (item.type) {
        case 'SOLID':
          result = this.rgba(item.color)
          break;
      
        default:
          break;
      }
    });
    return result;
  },
};
