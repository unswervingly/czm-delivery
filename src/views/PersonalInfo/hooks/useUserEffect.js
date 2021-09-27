import { ref, watchEffect } from 'vue'

import { czm_get } from '../../../utils/request'
export const useUserEffect = () => {
    let myId = ref('');
    let userName = ref('');

    const getUserInfo = async () => {
        const result = await czm_get('/api/user/info');
        if (result?.errno === 0 && result?.data) {
            const { _id, username } = result.data;
            myId.value = _id || '';
            userName.value = username || '';
        }
    }
    watchEffect(() => {
        getUserInfo();
    })


    return {
        myId,
        userName
    }
}