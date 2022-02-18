<template lang="pug">
Container(:class='[$style.default]')
  h1 card
</template>
<script>
import Container from "@/components/Utils/Container";

export default {
  name: "Card",
  components: {
    Container,
  },
};
</script>
<style lang="less" module>
.default {
  background: var(--bg_100);
  border-radius: var(--radius_000);
  padding: var(--padding_000);
}
</style>
