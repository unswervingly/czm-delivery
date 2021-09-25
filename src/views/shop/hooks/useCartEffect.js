// import { toRefs } from 'vue'
import { useStore } from 'vuex'

// 购物车相关的逻辑
export const useCartEffect = () => {
    const store = useStore();

    const cartList = store.state.cartList;
    // store是ref类型，要使用toRefs来解构
    // const { cartList } = toRefs(store.state);

    // 购物车数量增减逻辑和购物车商店名称
    const changeCartItemInfo = (shopId, productId, productItem, num) => {
        store.commit('changeCartItemInfo', {
            shopId,
            productId,
            productItem,
            num
        })
    }

    // 修改商店名称
    const changeShopName = (shopId, shopName) => {
        store.commit("changeShopName", { shopId, shopName });
    };

    // 向购物车加内容时，把商铺的名字添加进去
    const changeCartItem = (shopId, productId, productItem, num, shopName) => {
        changeCartItemInfo(shopId, productId, productItem, num);
        changeShopName(shopId, shopName);
    };

    // 点击商品 - +的数量
    const getProductCount = (shopId, productId) => {
        return cartList?.[shopId]?.productList?.[productId]?.count || 0
    }

    return {
        cartList,
        changeCartItemInfo,
        changeCartItem,

        getProductCount
    }
}