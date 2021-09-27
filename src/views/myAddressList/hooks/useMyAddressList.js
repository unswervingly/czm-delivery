import { watchEffect, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useAddressEffect } from "../hooks/useAddressEffect";


export const useMyAddressList = () => {
    const store = useStore();
    const router = useRouter();

    // 后退
    const handleBackClick = () => {
        router.back();
    };

    const handleAddClick = () => {
        // 跳转到编辑地址信息 UpsetAddress.vue页面
        router.push({ name: "UpsetAddress" });
    };

    // 把数据存储到store的addressList
    const { getAddressList } = useAddressEffect();
    watchEffect(() => {
        getAddressList();
    });

    // 获取 store的addressList数据
    const { addressList } = toRefs(store.state);

    const handleUpdateClick = (addressId) => {
        router.push({ path: `/upsetAddress/${addressId}` });
    };

    return {
        handleBackClick,
        handleAddClick,

        getAddressList,

        addressList,
        handleUpdateClick,
    }
}