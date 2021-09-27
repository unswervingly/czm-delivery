import { useStore } from 'vuex'
import { czm_get } from '../../../utils/request'

export const useAddressEffect = () => {
    const store = useStore();

    const getAddressList = async () => {
        const addressList = store.state.addressList;
        if (!addressList.length) {
            const result = await czm_get('/api/user/address');

            if (result?.data?.length) {
                store.commit('changeAddressList', result.data)
            }
        }
    }

    return {
        getAddressList
    }
}