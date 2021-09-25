<template>
  <div class="order">
    <div class="order__price">
      实付金额 <b>￥{{ calculations.price }}</b>
    </div>
    <div class="order__btn" @click="handlePlaceOrder(true)">提交订单</div>
  </div>

  <div class="mask" v-show="showConfirm" @click="handlePlaceOrder(false)">
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div
          class="mask__content__btn mask__content__btn--first"
          @click="handleOrder(true)"
        >
          取消订单
        </div>
        <div
          class="mask__content__btn mask__content__btn--last"
          @click="handleOrder(false)"
        >
          确认支付
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGetCartEffect } from "../shop/hooks/useGetCartEffect";
import { useMakeOrder } from "./hooks/useMakeOrder";
import { useShowMask } from "./hooks/useShowMask";

export default {
  name: "Order",
  setup() {
    const { handleOrder } = useMakeOrder();
    const { calculations } = useGetCartEffect();
    const { showConfirm, handlePlaceOrder } = useShowMask();

    return {
      calculations,
      showConfirm,
      handlePlaceOrder,
      handleOrder,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.order {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 0.49rem;
  line-height: 0.49rem;
  background: $bgColor;

  &__price {
    flex: 1;
    text-indent: 0.24rem;
    font-size: 0.14rem;
    color: $content-fontcolor;
  }

  &__btn {
    width: 0.98rem;
    background: $orderColor;
    color: $bgColor;
    text-align: center;
    font-size: 0.14rem;
  }
}

/* 添加订单 */
.mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    background: $bgColor;
    border-radius: 0.04rem;
    text-align: center;
    &__title {
      font-size: 0.18rem;
      color: $content-fontcolor;
      line-height: 0.26rem;
      margin: 0.24rem 0 0 0;
    }
    &__desc {
      font-size: 0.14rem;
      color: $medium-fontColor;
      margin: 0.1rem 0 0 0;
    }
    &__btns {
      display: flex;
      margin: 0.24rem 0.58rem;
    }
    &__btn {
      flex: 1;
      width: 0.8rem;
      line-height: 0.32rem;
      border-radius: 0.16rem;
      font-size: 0.14rem;
      &--first {
        margin-right: 0.12rem;
        color: $orderColor;
        border: 0.01rem solid $orderColor;
      }
      &--last {
        background: $orderColor;
        color: $bgColor;
        margin-left: 0.12rem;
      }
    }
  }
}
</style>