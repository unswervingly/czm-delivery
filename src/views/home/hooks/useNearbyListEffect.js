import { ref } from "vue";
import { czm_get } from "../../../utils/request";

export const useNearbyListEffect = () => {
    const nearbyList = ref([]);

    // 取数据
    const getNearbyList = async () => {
        const result = await czm_get("/api/shop/hot-list");

        console.log("getNearbyList:", result);

        if (result?.errno === 0 && result?.data.length) {
            nearbyList.value = result.data;
        } else {
            changeShowToast("登陆失败");
        }
    };

    return { nearbyList, getNearbyList }
}
