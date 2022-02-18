<template lang="pug">
button(:class='[$style[mode]]' @click='click') {{ text }}
</template>

<script>
export default {
  name: "Button",
  props: {
    mode: {
      type: String,
      default: "default",
    },
    text: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="less" module>
.default {
  background: red;
}
</style>
