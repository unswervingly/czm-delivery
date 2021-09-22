import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      cartList: {
        // 第一层级是商铺的id
        // shopId: {
        // 第二层是商品id
        // 第二层内容是商品内容以及购物数量
        //   productId: {
        //     _id: '1',
        //     name: '番茄250g/份',
        //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
        //     sales: 10,
        //     price: 33.6,
        //     oldPrice: 39.6,

        //     count: 0
        //   },
        // },
      }
    }
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productItem, num } = payload;

      let shopInfo = state.cartList[shopId];
      if (!shopInfo) shopInfo = {}

      let productInfo = shopInfo[productId];
      if (!productInfo) {
        productInfo = productItem;
        productInfo.count = 0;

      }

      productInfo.count = productInfo.count + num;
      // 判断productInfo.count 是否小于0，小于就让它等于0
      if (productInfo.count < 0) productInfo.count = 0;

      if (num > 0) productInfo.check = true;

      // 把修改的数据存回去
      shopInfo[productId] = productInfo;
      state.cartList[shopId] = shopInfo;

      console.log(shopId, productId, productItem);
    },

    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId][productId];
      product.check = !product.check;
    },

    setCartItemsChecked(state, payload) {
      const { shopId } = payload;
      const products = state.cartList[shopId];
      if (products) {
        for (let key in products) {
          const product = products[key];
          product.check = true;
        }
      }
    },

    cleanCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId] = {};
    }
  },
  actions: {
  },
  modules: {
  }
})
