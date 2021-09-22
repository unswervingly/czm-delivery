import { ref } from "vue";

// 和 tab 切换相关的逻辑
export const useTabEffect = (categories) => {
    const currentTab = ref(categories[0].tab);

    const handleCategoryClick = (tab) => {
        // getContentData(tab);
        currentTab.value = tab;
    };

    return {
        currentTab,
        handleCategoryClick
    }
}
