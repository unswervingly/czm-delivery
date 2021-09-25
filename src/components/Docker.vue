<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{
        docker__item: true,
        'docker__item--active': index === currentIndex,
      }"
      :key="item.icon"
    >
      <router-link :to="item.dockerTo" custom v-slot="props">
        <div class="iconfont" v-html="item.icon" @click="props.navigate"></div>
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  props: ["currentIndex"],
  setup() {
    const dockerList = [
      { icon: "&#xe603;", text: "首页", dockerTo: "/" },
      { icon: "&#xe65c;", text: "购物车", dockerTo: "CartList" },
      { icon: "&#xe612;", text: "订单", dockerTo: "OrderList" },
      { icon: "&#xe609;", text: "我的", dockerTo: "Home" },
    ];

    return {
      dockerList,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../style/viriables.scss";
@import "../style/mixins.scss";

/* 底部 */
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  padding: 0 0.18rem;
  border-top: 0.01rem solid $content-bgColor;
  color: $content-fontcolor;
  /* background: pink; */

  .docker__item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
  }

  .docker__item--active {
    color: pink;
  }

  .docker__title {
    font-size: 0.2rem;
    /* 浏览器最小只能12px，所以使用 transform: scale(0.5, 0.5);*/
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>