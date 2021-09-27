import { computed } from "vue";
import { useStore } from "vuex";

export const useCartEffect = () => {
    const store = useStore();
    const cartList = store.state.cartList;

    const cartListWithProducts = computed(() => {
        const newCartList = {};
        for (let shopId in cartList) {
            let total = 0;
            const products = cartList[shopId].productList;

            for (let productId in products) {
                const product = products[productId];
                total += product.count || 0;
            }
            if (total > 0) {
                newCartList[shopId] = cartList[shopId];
            }
        }

        return newCartList;
    });

    return {
        cartListWithProducts,
    };
};