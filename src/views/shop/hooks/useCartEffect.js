import { toRefs } from 'vue'
import { useStore } from 'vuex'

// 购物车相关的逻辑
export const useCartEffect = () => {
    const store = useStore();

    // const cartList = store.state.cartList
    // store是ref类型，要使用toRefs来解构
    const { cartList } = toRefs(store.state);

    const changeCartItemInfo = (shopId, productId, productItem, num) => {
        store.commit('changeCartItemInfo', {
            shopId,
            productId,
            productItem,
            num
        })
    }
    return {
        cartList,
        changeCartItemInfo
    }
}