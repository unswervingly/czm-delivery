<template>
  <div class="shop">
    <img :src="shopItem.imgUrl" class="shop__img" />
    <div
      class="shop__content"
      :class="{ 'shop__content--bordered': hideBorder ? 'fasle' : 'true' }"
    >
      <div class="shop__content__title">{{ shopItem.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">月售: {{ shopItem.sales }}</span>
        <span class="shop__content__tag"
          >起送: {{ shopItem.expressLimit }}</span
        >
        <span class="shop__content__tag"
          >基础运费: {{ shopItem.expressPrice }}</span
        >
      </div>
      <p class="shop__content__highlight">{{ shopItem.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: ["shopItem", "hideBorder"],
};
</script>

<style lang="scss" scoped>
@import "../style/viriables.scss";
@import "../style/mixins.scss";

.shop {
  display: flex;
  padding-top: 0.12rem;
  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    &--bordered {
      border-bottom: 1px solid $content-bgColor;
    }
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $hightlight-fontColor;
    }
  }
}
</style>