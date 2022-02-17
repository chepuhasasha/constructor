<template lang="pug">
component.container(:is='tag')
  slot
</template>
<script>
export default {
  name: "Container",
};
</script>
<style lang="less">
.container {
}
</style>
<style lang="less" module>
.default {
}
</style>
