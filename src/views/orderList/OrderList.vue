<template>
  <div class="warpper">
    <div class="title">我的订单</div>

    <div class="orders">
      <div
        class="order"
        v-for="(orderListItem, index) in settlementOrderList"
        :key="index"
      >
        <div class="order__title">
          {{ orderListItem.shopName }}
          <span class="order__status"
            >{{ orderListItem.isCanceled ? "已取消" : "已下单" }}}</span
          >
        </div>

        <div class="order__content">
          <div class="order__content__imgs">
            <template
              v-for="(innerItem, innerIndex) in orderListItem.products"
              :key="innerIndex"
            >
              <img
                class="order__content__img"
                :src="innerItem.product.img"
                v-if="innerIndex <= 3"
              />
            </template>
          </div>

          <div class="order__content__info">
            <div class="order__content__info__price">￥36.60</div>
            <div class="order__content__info__count">
              共 {{ orderListItem.products.length }} 件
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Docker :currentIndex="2" />
</template>

<script>
import { ref } from "vue";

import { czm_get } from "../../utils/request";

import Docker from "../../components/Docker.vue";

// 处理下完单的订单列表逻辑
const useOrderList = () => {
  const settlementOrderList = ref([]);

  // 取数据
  const getOrderList = async () => {
    const result = await czm_get("/api/order");

    if (result?.errno === 0 && result?.data.length) {
      // 给数据里面添加一个订单总钱数
      const orderList = result.data;
      console.log(orderList);
      orderList.forEach((order) => {
        const products = order.products;
        let total = 0;
        products.forEach((productItem) => {
          total += productItem.product.price * productItem.orderSales;
        });
      });

      settlementOrderList.value = result.data;
    } else {
      changeShowToast("登陆失败");
    }
  };

  getOrderList();

  return { settlementOrderList };
};

export default {
  name: "OrderList",
  components: {
    Docker,
  },
  setup() {
    const { settlementOrderList } = useOrderList();
    console.log(settlementOrderList);
    return { settlementOrderList };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.warpper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background: rgb(248, 248, 248);
}

.title {
  text-align: center;
  line-height: 0.44rem;
  font-size: 0.16rem;
  color: $content-fontcolor;
  background: $bgColor;
}

/* .orders {
} */
.order {
  margin: 0.16rem 0.18rem;
  padding: 0.16rem;
  background: $bgColor;
  &__title {
    display: flex;
    justify-content: space-between;
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: $content-fontcolor;
    margin-bottom: 0.16rem;
  }
  &__status {
    font-size: 0.14rem;
    color: $light-fontColor;
  }

  &__content {
    display: flex;
    align-items: center;
    &__imgs {
      flex: 1;
    }
    &__img {
      width: 0.44rem;
      height: 0.44rem;
      margin-right: 0.12rem;
      vertical-align: middle;
    }
    &__info {
      width: 0.7rem;
      text-align: right;
      line-height: 0.2rem;
      &__price {
        margin-bottom: 0.04rem;
        font-size: 0.14rem;
        color: $hightlight-fontColor;
      }
      &count {
        font-size: 0.12rem;
        color: $content-fontcolor;
      }
    }
  }
}
</style>