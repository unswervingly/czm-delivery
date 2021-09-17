<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe64f;</span>
    福建省福州大学芙蓉楼10号楼216宿舍福建省福州大学
    <span class="iconfont position__notice">&#xe7e5;</span>
  </div>
  <i class="iconfont">&#xe64c;</i>
  <input type="search" class="search" placeholder="全场大甩卖" />

  <div class="banner">
    <img src="../../assets/banner.jpg" alt="轮播图" class="banner__img" />
  </div>

  <div class="icons">
    <div class="icons__item" v-for="item in iconList" :key="item.id">
      <img class="icons__item__img" :src="item.src" />
      <p class="icons__item__desc">{{ item.title }}</p>
    </div>
  </div>
  
  <div class="gap"></div>
</template>

<script>
export default {
  name: "StaticPart",
  setup() {
    const iconList = [
      {
        id: 1,
        title: "超市便利",
        src: "http://www.dell-lee.com/imgs/vue3/超市.png",
      },
      {
        id: 2,
        title: "菜市场",
        src: "http://www.dell-lee.com/imgs/vue3/菜市场.png",
      },
      {
        id: 3,
        title: "水果店",
        src: "http://www.dell-lee.com/imgs/vue3/水果店.png",
      },
      {
        id: 4,
        title: "鲜花绿植",
        src: "http://www.dell-lee.com/imgs/vue3/鲜花.png",
      },
      {
        id: 5,
        title: "医药健康",
        src: "http://www.dell-lee.com/imgs/vue3/医药健康.png",
      },
      {
        id: 6,
        title: "家居时尚",
        src: "http://www.dell-lee.com/imgs/vue3/家居.png",
      },
      {
        id: 7,
        title: "烘培蛋糕",
        src: "http://www.dell-lee.com/imgs/vue3/蛋糕.png",
      },
      {
        id: 8,
        title: "签到",
        src: "http://www.dell-lee.com/imgs/vue3/签到.png",
      },
      {
        id: 9,
        title: "大牌免运",
        src: "http://www.dell-lee.com/imgs/vue3/大牌免运.png",
      },
      {
        id: 10,
        title: "红包套餐",
        src: "http://www.dell-lee.com/imgs/vue3/红包.png",
      },
    ];

    return {
      iconList,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  color: $content-fontcolor;
  /* 使用scss 来导入 我封装的单行溢出 */
  @include ellipsis;

  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }

  .position__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
}

i {
  position: absolute;
  left: 0.38rem;
  top: 0.6rem;
  font-size: 0.2rem;
  color: #b7b7b7;
}
/* 搜索框 */
.search {
  border: 0;
  outline: none;

  width: 100%;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  font-size: 0.14rem;
  border-radius: 0.16rem;
  padding: 0 0.46rem;

  margin-bottom: 0.12rem;
}

/* 轮播图 */
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;

  .banner__img {
    width: 100%;
  }
}

/* 列表 */
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

/* 列表商品 */
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: #F1F1F1;
}
</style>