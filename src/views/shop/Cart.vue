<template>
  <div
    class="mask"
    v-show="showCart && calculations.total > 0"
    @click="handleCartShowChange"
  ></div>
  <div class="cart">
    <div class="product" v-show="showCart && calculations.total > 0">
      <div class="product__header">
        <div class="product__header__all" @click="setCartItemsChecked(shopId)">
          <span
            class="product__header__icon iconfont"
            v-html="calculations.allChecked ? '&#xe652;' : '&#xe667;'"
          >
          </span>
          全选
        </div>
        <div class="product__header__clear">
          <span
            class="product__header__clear__btn"
            @click="cleanCartProducts(shopId)"
            >清空购物车</span
          >
        </div>
      </div>

      <div
        class="product__item"
        v-for="productItem in getCartList"
        :key="productItem._id"
      >
        <div
          class="product__item__checked iconfont"
          v-html="productItem.check ? '&#xe652;' : '&#xe667;'"
          @click="changeCartItemChecked(shopId, productItem._id)"
        ></div>

        <img class="product__item__img" :src="productItem.imgUrl" />

        <div class="product__item__detail">
          <h4 class="product__item__title">{{ productItem.name }}</h4>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ productItem.price }}
            <span class="product__item__origin"
              >&yen;{{ productItem.oldPrice }}</span
            >
          </p>

          <div class="product__number">
            <span
              class="product__number__minus"
              @click="
                changeCartItemInfo(shopId, productItem._id, productItem, -1)
              "
              >-</span
            >
            {{ productItem.count || 0 }}
            <span
              class="product__number__plus"
              @click="
                changeCartItemInfo(shopId, productItem._id, productItem, 1)
              "
              >+</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="check">
      <div class="check__icon" @click="handleCartShowChange">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
        />
        <div class="check__icon__tag">{{ calculations.total }}</div>
      </div>

      <div class="check__info">
        总计：<span class="check__info__price"
          >&yen; {{ calculations.price }}</span
        >
      </div>

      <div class="check__btn" v-show="calculations.total > 0">
        <router-link
          :to="{ path: `/OrderConfirmation/${shopId}` }"
          v-slot="props"
          custom
        >
          <span @click="props.navigate">去结算</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useGetCartEffect } from "./hooks/useGetCartEffect";

export default {
  name: "Cart",
  setup() {
    const {
      shopId,

      showCart,
      handleCartShowChange,

      calculations,

      getCartList,
      changeCartItemInfo,
      changeCartItemChecked,

      setCartItemsChecked,
      cleanCartProducts,
    } = useGetCartEffect();

    return {
      shopId,

      showCart,
      handleCartShowChange,

      calculations,

      getCartList,
      changeCartItemInfo,
      changeCartItemChecked,

      setCartItemsChecked,
      cleanCartProducts,

      showCart,
      handleCartShowChange,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}

.product {
  overflow-y: scroll;
  flex: 1;
  background: $bgColor;
  &__header {
    display: flex;
    line-height: 0.52rem;
    border-bottom: 1px solid #f1f1f1;
    font-size: 0.14rem;
    color: $content-fontcolor;
    &__all {
      width: 0.64rem;
      margin-left: 0.18rem;
    }
    &__icon {
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.1rem;
      color: $btn-bgColor;
      font-size: 0.2rem;
    }
    &__clear {
      flex: 1;
      margin-right: 0.16rem;
      text-align: right;
      &__btn {
        display: inline-block;
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__checked {
      line-height: 0.5rem;
      margin-right: 0.2rem;
      color: $btn-bgColor;
      font-size: 0.2rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: 0.06rem 0 0 0;
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
      bottom: 0.26rem;
      &__minus,
      &__plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.16rem;
        border-radius: 50%;
        font-size: 0.2rem;
        text-align: center;
      }
      &__minus {
        border: 0.01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: 0.05rem;
      }
      &__plus {
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: 0.05rem;
      }
    }
  }
}

.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  line-height: 0.49rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      left: 0.46rem;
      top: 0.04rem;
      padding: 0 0.04rem;
      min-width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: $hightlight-fontColor;
      border-radius: 0.1rem;
      font-size: 0.12rem;
      text-align: center;
      color: $bgColor;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: 0.12rem;
    &__price {
      line-height: 0.49rem;
      color: $hightlight-fontColor;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background-color: #4fb0f9;
    text-align: center;
    color: #fff;
    font-size: 0.14rem;
  }
}
</style>