import { computed } from 'vue'
import { useRoute } from 'vue-router'
// import { useStore } from 'vuex'

import { useMyAddressList } from '../../myAddressList/hooks/useMyAddressList'

export const useCorrectAddress = () => {
    const route = useRoute();
    const addressId = route.params.id;
    const { addressList } = useMyAddressList();

    const currentAddress = computed(() => {

        // const store = useStore();
        // const addressList = store.state.addressList;
        return addressList.value.find(item => item._id === addressId) || addressList[0];
    })

    return { currentAddress }
}