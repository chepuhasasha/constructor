<template lang="pug">
Container(:class='[theme]' :style='{background: "var(--bg_000)"}')
  router-view
</template>

<script>
import Container from "@/components/Utils/Container.vue";
import { mapState } from "vuex";

export default {
  namw: "App",
  components: {
    Container,
  },
  computed: {
    ...mapState({
      theme: (state) => state.theme,
    }),
  },
};
</script>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
