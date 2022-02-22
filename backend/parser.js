export default {
  parse(obj) {
    const result = {
      childs: [],
    };
    obj.children.forEach((child) => {
      result.childs.push(this.parse(child));
    });
    return result;
  },

  background({ r = 1, g = 1, b = 1, a = 1 }) {
    return `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${a})`;
  },
};
