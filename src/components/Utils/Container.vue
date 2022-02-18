<template lang="pug">
component(:is='tag' :class='[$style[mode]]')
  slot
</template>
<script>
export default {
  name: "Container",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    mode: {
      type: String,
      default: "default",
    },
  },
};
</script>
<style lang="less" module>
.default {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
</style>
