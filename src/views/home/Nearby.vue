<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺 {{ counterIndex }}</h3>

    <shop-info
      v-for="(item, index) in nearbyList"
      :key="item._id"
      :shopItem="item"
      @click="handleShop(index, item)"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import ShopInfo from "../../components/ShopInfo.vue";

import { useNearbyListEffect } from "./hooks/useNearbyListEffect";

export default {
  name: "Nearby",
  components: {
    ShopInfo,
  },
  setup() {
    const { nearbyList, getNearbyList } = useNearbyListEffect();
    getNearbyList();

    const router = useRouter();
    let counterIndex = ref(1);

    const handleShop = (index, item) => {
      counterIndex.value = index + 1;

      if (counterIndex.value == item._id) {
        // 可以使用 name和params跳转动态路由
        router.push({
          name: "Shop",
          params: {
            id: item._id,
            expressLimit: item.expressLimit,
            expressPrice: item.expressPrice,
            imgUrl: item.imgUrl,
            name: item.name,
            sales: item.sales,
            slogan: item.slogan,
          },
        });

        // router.push({ name: "Shop", params: item });
        // router.push({ path: `/shop/${item._id}`, query: item });
      }
    };

    return {
      nearbyList,
      counterIndex,
      handleShop,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
}
</style>