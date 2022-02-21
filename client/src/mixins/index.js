export default {
  methods: {
    camelToKebab(str) {
      return str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.toLowerCase())
        .join("-");
    },
    objectToCSS(obj) {
      let content = Object.keys(obj).reduce((accumulator, prop) => {
        return (accumulator += `  ${this.camelToKebab(prop)}: ${obj[prop]};\n`);
      }, " ");
      return `{\n${content}}`;
    },
  },
};
