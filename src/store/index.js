import { createStore } from 'vuex'

// 刷新页面，保存购物车信息不会丢失
const setLocalCartList = (state) => {
  const { cartList } = state;
  const cartListString = JSON.stringify(cartList);
  localStorage.cartList = cartListString;
}

// 得到购物车信息，放到 state 中
const getLocalCartList = () => {
  try {
    return JSON.parse(localStorage.cartList)
  } catch (error) {
    return {}
  }

}

export default createStore({
  state() {
    return {
      // cartList 的 数据结构
      /* cartList: {
        // 第一层级是商铺的id
        // shopId: {
        // 第二层是商品name
        // 第三层是商品列表
        // shopName: '永辉超市',
        // productList: {
        // 第三层是商品id
        // 第三层内容是商品内容以及购物数量
        //   productId: {
        //     _id: '1',
        //     name: '番茄250g/份',
        //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
        //     sales: 10,
        //     price: 33.6,
        //     oldPrice: 39.6,

        //     count: 0
        //   },
        // }

        // },
      } 
      */

      // cartList: {}, 
      // 使用 localStorage 把存储的数据放到 cartList
      cartList: getLocalCartList(),

      addressList: [],
    }
  },
  mutations: {
    // 购物车数量增减逻辑
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productItem, num } = payload;

      let shopInfo = state.cartList[shopId] || { shopName: '', productList: {} };

      let productInfo = shopInfo.productList[productId];
      if (!productInfo) {
        productItem.count = 0;
        productInfo = productItem;
      }

      productInfo.count = productInfo.count + num;
      // 判断productInfo.count 是否小于0，小于就让它等于0
      if (productInfo.count < 0) productInfo.count = 0;

      if (num > 0) productInfo.check = true;

      // 把修改的数据存回去
      shopInfo.productList[productId] = productInfo;
      state.cartList[shopId] = shopInfo;

      console.log(shopId, productId, productItem);
      console.log('cartList的数据结构形式', state.cartList);

      // 改变cartList数据就存储到本地
      setLocalCartList(state);
    },

    // 修改商店名称
    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      const shopInfo = state.cartList[shopId] || { shopName: '', productList: {} };
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;

      // 改变cartList数据就存储到本地
      setLocalCartList(state);
    },

    // 购物车选择框
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId].productList[productId];
      product.check = !product.check;

      // 改变cartList数据就存储到本地
      setLocalCartList(state);
    },

    // 全选购物车选择框
    setCartItemsChecked(state, payload) {
      const { shopId } = payload;
      const products = state.cartList[shopId].productList;
      if (products) {
        for (let key in products) {
          const product = products[key];
          product.check = true;
        }
      }

      // 改变cartList数据就存储到本地
      setLocalCartList(state);
    },

    // 清空购物车 和 提交订单时清除商品列表
    cleanCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};
    },

    // 改变addressLis数据
    changeAddressList(state, payload) {
      state.addressList.splice(0, state.addressList.length, ...payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
