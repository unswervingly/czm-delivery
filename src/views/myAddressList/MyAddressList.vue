<template>
  <div class="wrapper">
    <div class="title">
      <div class="iconfont title__back" @click="handleBackClick">&#xe601;</div>
      <div class="title__text">管理收货地址</div>
      <div class="title__add" @click="handleAddClick">新建</div>
    </div>

    <Address
      v-for="addressItem in addressList"
      :key="addressItem._id"
      :address="addressItem"
      @click="() => handleUpdateClick(addressItem._id)"
    />
  </div>
</template>

<script>
import { useMyAddressList } from "./hooks/useMyAddressList";
import Address from "../../components/Address.vue";

export default {
  name: "MyAddressList",
  components: {
    Address,
  },
  setup() {
    const {
      handleBackClick,
      handleAddClick,

      getAddressList,

      addressList,

      handleUpdateClick,
    } = useMyAddressList();

    return {
      handleBackClick,
      handleAddClick,

      getAddressList,

      addressList,
      handleUpdateClick,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: $dark-bgColor;
}

.title {
  display: flex;
  line-height: 0.44rem;
  background: $bgColor;
  font-size: 0.16rem;
  color: $content-fontcolor;
  text-align: center;
  &__back {
    width: 0.2rem;
    margin-left: 0.18rem;
    font-size: 0.2rem;
    color: #b6b6b6;
  }
  &__text {
    flex: 1;
  }
  &__add {
    margin-right: 0.2rem;
    font-size: 0.14rem;
  }
}
</style>