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
  created() {
    this.config = data;
  },
};
</script>

<style lang="less"></style>
