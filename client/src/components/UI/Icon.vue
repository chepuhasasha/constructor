<template lang="pug">
svg(viewBox='0 0 512 512' :width='size' :height='size' @click='click')
  path(v-for='path in getPaths' :d='path' :fill='fill')
</template>

<script>
import icons from "./icons.js";

export default {
  name: "Icon",
  props: {
    icon: {
      type: String,
      default: "error",
    },
    fill: {
      type: String,
      default: "black",
    },
    size: {
      type: Number,
      default: 14,
    },
  },
  computed: {
    getPaths() {
      return icons.getPaths(this.icon);
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>
