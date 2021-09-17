<template>
  <div class="warpper">
    <static-part />
    <nearby />
  </div>
  <docker />
</template>

<script>
import StaticPart from "./StaticPart.vue";
import Nearby from "./Nearby.vue";
import Docker from "./Docker.vue";

export default {
  name: "Home",
  components: {
    StaticPart,
    Nearby,
    Docker,
  },
};
</script>

<style lang="scss">
/* 顶部 */
.warpper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.1rem 0.18rem;
}
</style>
