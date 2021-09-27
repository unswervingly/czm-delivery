import { computed } from 'vue'
import { useStore, mapGetters } from 'vuex'

export function useGetters(mapper) {
    // 拿到store对象
    const store = useStore()

    // 获取到对应的对象的functions: {counter: function, name: function, age: function}
    const storeStateFns = mapGetters(mapper)

    // 对数据进行转换
    const storeState = {}
    Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({ $store: store })
        storeState[fnKey] = computed(fn)
    })

    return storeState
}