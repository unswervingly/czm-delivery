import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { czm_post } from "../../../utils/request";

import { useGetCartEffect } from "../../shop/hooks/useGetCartEffect";
import { useToastEffect } from "../../../components/Toast.vue";

// 下单相关逻辑
export const useMakeOrder = () => {
    const router = useRouter();
    const store = useStore();

    const { shopId, getCartList, getShopName } =
        useGetCartEffect();
    const { changeShowToast } = useToastEffect();

    // 点击取消订单，确认订单一起的函数逻辑
    const handleOrder = async (isCanceled) => {
        // 得到订单的信息
        const products = [];
        for (let k in getCartList.value) {
            const product = getCartList.value[k];
            products.push({
                id: parseInt(product._id, 10),
                num: product.count,
            });
        }

        try {
            const result = await czm_post("/api/order", {
                address: 1,
                shopId,
                shopName: getShopName.value,
                isCanceled,
                products,
            });

            if (result?.errno === 0) {
                if (!isCanceled) {
                    store.commit("cleanCartProducts", { shopId });
                    router.push({ name: "OrderList" });
                } else {
                    router.push({ name: "Shop" });
                }
            }
        } catch (e) {
            changeShowToast("订单失败");
        }
    };

    return {
        handleOrder
    }
}