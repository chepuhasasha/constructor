<template lang="pug">
svg(:class='[$style[mode]]' @click='click' :d='getPath')
</template>

<script>
export default {
  name: "Icon",
  props: {
    mode: {
      type: String,
      default: "default",
    },
    icon: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      map: {
        plus: "",
      },
    };
  },
  computed: {
    getPath() {
      return this.map[this.icon];
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
