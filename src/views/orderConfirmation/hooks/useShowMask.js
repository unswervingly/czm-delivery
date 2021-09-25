import { ref } from "vue";

// 蒙层展示相关逻辑
export const useShowMask = () => {
    let showConfirm = ref(false);
    const handlePlaceOrder = (status) => {
        showConfirm.value = status;
    };

    return {
        showConfirm,
        handlePlaceOrder
    }
}