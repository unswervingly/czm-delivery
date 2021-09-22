import { ref, watchEffect } from "vue";

import { czm_get } from "../../../utils/request";

// 列表内容相关的逻辑
export const useListEffect = (currentTab, shopId) => {

    const contentList = ref([]);

    const getContentData = async () => {
        const result = await czm_get(`/api/shop/${shopId}/products`, {
            tab: currentTab.value,
        });

        if (result?.errno === 0 && result?.data?.length) {
            contentList.value = result.data;
        }
    };

    watchEffect(() => {
        getContentData()
    })

    return {
        contentList
    }
}