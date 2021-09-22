import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import { useCartEffect } from "../hooks/useCartEffect";

// 获取购物车信息逻辑 总数和购物数量等等
export const useGetCartEffect = () => {
    const { changeCartItemInfo } = useCartEffect();

    const route = useRoute();
    const shopId = route.params.id;

    const store = useStore();
    const cartList = store.state.cartList;

    // 点击购物车显示购物商品
    const showCart = ref(false);
    const handleCartShowChange = () => {
        showCart.value = !showCart.value;
    };

    // 计算 我选中的商品总个数
    const total = computed(() => {
        const productList = cartList[shopId];
        let count = 0;
        if (productList) {
            for (let k in productList) {
                const product = productList[k];
                count += product.count;
            }
        }

        return count;
    });

    // 计算 我选中的商品总价格
    const price = computed(() => {
        const productList = cartList[shopId];
        let count = 0;
        if (productList) {
            for (let k in productList) {
                const product = productList[k];
                if (product.check) {
                    count += product.count * product.price;
                }
            }
        }

        return count.toFixed(2);
    });

    // 得到我选择的商品，放到购物车里面显示
    const getCartList = computed(() => {
        const productList = cartList[shopId] || [];
        return productList
    })

    // 购物车选择框
    const changeCartItemChecked = (shopId, productId) => {
        store.commit('changeCartItemChecked', { shopId, productId, })
    }

    // 是否全部选中
    const allChecked = computed(() => {
        const productList = cartList[shopId];
        let result = true;
        if (productList) {
            for (let k in productList) {
                const product = productList[k];
                if (product.count > 0 && !product.check) {
                    result = false;
                }
            }

            return result;
        }
    });

    // 全选
    const setCartItemsChecked = (shopId) => {
        store.commit('setCartItemsChecked', { shopId })
    }

    // 清空购物车
    const cleanCartProducts = (shopId) => {
        store.commit('cleanCartProducts', { shopId });
    }


    return {
        shopId,

        showCart,
        handleCartShowChange,

        total,
        price,
        getCartList,

        changeCartItemInfo,
        changeCartItemChecked,

        allChecked,
        setCartItemsChecked,
        cleanCartProducts
    }
}