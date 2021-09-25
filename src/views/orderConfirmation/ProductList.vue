<template>
  <div class="products">
    <div class="products__title">{{ getShopName }}</div>
    <div class="products__wrapper">
      <div class="products__list">
        <div
          class="products__item"
          v-for="orderItem in getCartList"
          :key="orderItem._id"
        >
          <img class="products__item__img" :src="orderItem.imgUrl" />

          <div class="products__item__detail">
            <h4 class="products__item__title">{{ orderItem.name }}</h4>

            <p class="products__item__price">
              <span class="products__item__yen"
                >&yen; {{ orderItem.price }} x {{ orderItem.count }}</span
              >
              <span class="products__item__total"
                >&yen;
                {{ (orderItem.price * orderItem.count).toFixed(2) }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGetCartEffect } from "../shop/hooks/useGetCartEffect";

export default {
  name: "ProductList",
  setup() {
    const { getCartList, getShopName, calculations } = useGetCartEffect();

    console.log(getCartList.value);
    return {
      getCartList,
      getShopName,
      calculations,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.products {
  margin: 0.16rem 0.18rem 0.1rem 0.18rem;
  background: $bgColor;
  &__title {
    padding: 0.16rem;
    font-size: 0.16rem;
    color: $content-fontcolor;
  }
  &__wrapper {
    overflow-y: scroll;
    margin: 0 0.18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.6rem;
    top: 2.6rem;
  }
  &__list {
    background: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 0.16rem 0.16rem 0.16rem;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
      align-self: center;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: #000;
    }
    &__yen {
      font-size: 0.12rem;
    }
  }
}
</style>