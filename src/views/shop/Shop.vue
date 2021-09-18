<template>
  <div class="warpper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe601;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe64c;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>

    <shop-info
      :shopItem="shopItem"
      :hideBorder="true"
      v-show="shopItem.imgUrl"
    />
    <content />
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import ShopInfo from "../../components/ShopInfo.vue";
import Content from "../shop/Content.vue";

export default {
  name: "Shop",
  components: {
    ShopInfo,
    Content,
  },
  created() {
    console.log(this.$route);
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    // const shopItem = route.params;
    const shopItem = route.query;

    const handleBackClick = () => {
      router.back();
    };

    return { shopItem, handleBackClick };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.warpper {
  padding: 0 0.18rem;
}

.search {
  display: flex;
  margin: 0.14rem 0 0.04rem 0;
  line-height: 0.32rem;
  &__back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>