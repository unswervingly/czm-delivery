<template>
  <div class="wrapper">
    <div class="title">
      <div class="iconfont title__back" @click="handleBackClick">&#xe601;</div>
      <div class="title__text">新建收货地址</div>
      <div class="title__save" @click="upsetAddress">保存</div>
    </div>

    <div class="form">
      <div class="form__item">
        <div class="form__item__label">所在城市:</div>
        <input class="form__item__content" placeholder="如地球村" />
      </div>
      <div class="form__item">
        <div class="form__item__label">小区/大厦/学校:</div>
        <input class="form__item__content" placeholder="如家里蹲大学" />
      </div>
      <div class="form__item">
        <div class="form__item__label">楼号-门牌号:</div>
        <input class="form__item__content" placeholder="8号楼20层" />
      </div>
      <div class="form__item">
        <div class="form__item__label">收货人:</div>
        <input class="form__item__content" placeholder="请填写收货人的姓名" />
      </div>
      <div class="form__item">
        <div class="form__item__label">联系电话:</div>
        <input class="form__item__content" placeholder="请填写收货手机号" />
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { toRefs, reactive } from "vue";
export default {
  name: "UpsetAddress",
  setup() {
    const router = useRouter();
    // const route = useRoute()
    const handleBackClick = () => {
      router.back();
    };

    return {
      handleBackClick,
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
    color: $search-fontColor;
  }
  &__text {
    flex: 1;
    text-align: center;
  }
  &__save {
    margin-right: 0.2rem;
    font-size: 0.14rem;
  }
}

.form {
  padding: 0 0.2rem;
  margin-top: 0.12rem;
  background: $bgColor;
  border-top: 0.01rem solid $content-bgColor;
  border-bottom: 0.01rem solid $content-bgColor;
  &__item {
    display: flex;
    padding: 0.12rem 0;
    line-height: 0.2rem;
    font-size: 0.14rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &:last-of-type {
      border-bottom: none;
    }
    &__label {
      margin-right: 0.05rem;
      color: $medium-fontColor;
    }
    &__content {
      flex: 1;
      border: none;
      outline: none;
      color: #3f3f3f;
      &::placeholder {
        padding-left: 0.12rem;
        color: #3f3f3f;
      }
    }
  }
}
</style>