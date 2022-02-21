<template lang="pug">
Element(
  v-for='el in getLayout' 
  :element='el'
)
</template>

<script>
import data from "./config.js";
import Element from "@/components/Utils/Element.vue";

export default {
  name: "Viewer",
  components: {
    Element,
  },
  data() {
    return {
      config: null,
    };
  },
  computed: {
    getLayout() {
      return this.config.layout;
    },
  },
  methods: {
    kebab(str) {
      return str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.toLowerCase())
        .join("-");
    },
  },
  created() {
    this.config = data;
  },
  mounted() {
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = " ";
    Object.keys(this.config.global.classes).forEach((name) => {
      let content = "";
      Object.keys(this.config.global.classes[name]).forEach((prop) => {
        content += `  ${this.kebab(prop)}: ${
          this.config.global.classes[name][prop]
        }; \n`;
      });
      console.log(content);
      style.innerHTML += `\n.${name} { \n${content} }`;
    });
    document.getElementsByTagName("head")[0].appendChild(style);
  },
};
</script>

<style lang="less"></style>
