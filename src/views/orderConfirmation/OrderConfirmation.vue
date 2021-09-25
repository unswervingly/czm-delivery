<template>
  <div class="wrapper">
    <ToArea />
    <ProductList />
    <Order />
  </div>
</template>

<script>
import ToArea from "./ToArea.vue";
import ProductList from "./ProductList.vue";
import Order from "./Order.vue";

export default {
  name: "OrderConfirmation",
  components: {
    ToArea,
    ProductList,
    Order,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>