<template>
  <div class="content">
    <div class="category">
      <div
        class="category__item"
        :class="{ 'category__item--active': currentTab === categoryItem.tab }"
        v-for="categoryItem in categories"
        :key="categoryItem.name"
        @click="handleCategoryClick(categoryItem.tab)"
      >
        {{ categoryItem.name }}
      </div>
    </div>

    <div class="product">
      <div
        class="product__item"
        v-for="productItem in contentList"
        :key="productItem._id"
      >
        <img class="product__item__img" :src="productItem.imgUrl" />

        <div class="product__item__detail">
          <h4 class="product__item__title">{{ productItem.name }}</h4>
          <p class="product__item__sales">月售 {{ productItem.sales }} 件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ productItem.price }}
            <span class="product__item__origin"
              >&yen;{{ productItem.oldPrice }}</span
            >
          </p>

          <div class="product__number">
            <span
              class="product__number__minus iconfont"
              @click="
                changeCartItem(
                  shopId,
                  productItem._id,
                  productItem,
                  -1,
                  shopName
                )
              "
              >&#xe677;</span
            >
            <!-- {{ cartList?.[shopId]?.productList?.[productItem._id]?.count || 0 }} -->
            {{ getProductCount(shopId, productItem._id) }}
            <span
              class="product__number__plus iconfont"
              @click="
                changeCartItem(
                  shopId,
                  productItem._id,
                  productItem,
                  1,
                  shopName
                )
              "
              >&#xe653;</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import { useTabEffect } from "./hooks/useTabEffect";
import { useListEffect } from "./hooks/useListEffect";
import { useCartEffect } from "./hooks/useCartEffect";

const categories = [
  {
    name: "全部商品",
    tab: "all",
  },
  {
    name: "秒杀",
    tab: "seckill",
  },
  {
    name: "新鲜水果",
    tab: "fruit",
  },
];

export default {
  name: "Content",
  props: ["shopName"],
  setup() {
    const route = useRoute();
    const shopId = route.params.id;

    const { currentTab, handleCategoryClick } = useTabEffect(categories);

    const { contentList } = useListEffect(currentTab, shopId);

    const { cartList, changeCartItem, getProductCount } = useCartEffect();

    return {
      shopId,

      categories,
      currentTab,
      contentList,
      handleCategoryClick,

      cartList,
      changeCartItem,
      getProductCount,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: 0.76rem;
  background: $search-bgColor;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: .14rem;
    color: #333;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: $content-fontcolor;
    }
    &__price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      line-height: 0.18rem;
      &__minus {
        position: relative;
        top: 0.01rem;
        color: $medium-fontColor;
        margin-right: 0.05rem;
      }
      &__plus {
        position: relative;
        top: 0.01rem;
        color: $btn-bgColor;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>