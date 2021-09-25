import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import { useCartEffect } from "../hooks/useCartEffect";

// 获取购物车信息逻辑 总数和购物数量等等
export const useGetCartEffect = () => {
    const route = useRoute();
    const shopId = parseInt(route.params.id, 10);

    const store = useStore();

    const { cartList, changeCartItemInfo } = useCartEffect();

    // 展示隐藏购物车逻辑
    const showCart = ref(false);
    const handleCartShowChange = () => {
        showCart.value = !showCart.value;
    };

    // 简化代码 计算 我选中的商品总个数 , 我选中的商品总价格, 是否全部选中
    const calculations = computed(() => {
        const productList = cartList[shopId]?.productList;
        let result = { total: 0, price: 0, allChecked: true }

        if (productList) {
            for (let k in productList) {
                const product = productList[k];
                // 计算 我选中的商品总个数
                result.total += product.count;

                // 计算 我选中的商品总价格
                if (product.check) {
                    result.price += (product.count * product.price);
                }

                // 计算 是否全部选中
                if (product.count > 0 && !product.check) {
                    result.allChecked = false;
                }
            }
        }

        result.price = result.price.toFixed(2);

        return result;
    });
    // 计算 我选中的商品总个数
    /* const total = computed(() => {
        const productList = cartList[shopId]?.productList;
        let count = 0;
        if (productList) {
            for (let k in productList) {
                const product = productList[k];
                count += product.count;
            }
        }
        return count;
    }); */

    // 计算 我选中的商品总价格
    /* const price = computed(() => {
        const productList = cartList[shopId]?.productList;
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
    }); */

    // 得到我选择的商品，放到购物车里面显示
    const getCartList = computed(() => {
        const productList = cartList[shopId]?.productList || {};

        // 判断 count > 0 notEmptyProductList的商品
        let notEmptyProductList = {};
        for (let i in productList) {
            const product = productList[i];
            if (product.count > 0) {
                notEmptyProductList[i] = product;
            }
        }

        return notEmptyProductList;
    })

    // 得到我选择的商品的商铺名称
    const getShopName = computed(() => {
        const getShopName = cartList[shopId]?.shopName || '';
        return getShopName
    })

    // 购物车选择框
    const changeCartItemChecked = (shopId, productId) => {
        store.commit('changeCartItemChecked', { shopId, productId, })
    }

    // 是否全部选中
    /* const allChecked = computed(() => {
        const productList = cartList[shopId]?.productList;
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
    }); */

    // 全选购物车选择框
    const setCartItemsChecked = (shopId) => {
        store.commit('setCartItemsChecked', { shopId })
    }

    // 清空购物车
    const cleanCartProducts = (shopId) => {
        handleCartShowChange();
        store.commit('cleanCartProducts', { shopId });
    }


    return {
        shopId,

        showCart,
        handleCartShowChange,

        calculations,

        getCartList,
        getShopName,
        changeCartItemInfo,
        changeCartItemChecked,


        setCartItemsChecked,
        cleanCartProducts
    }
}