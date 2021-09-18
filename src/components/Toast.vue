<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["message"],
};

export const useToastEffect = () => {
  const showToast = ref(false);
  const toastMessage = ref("");

  // 登录失败后的展示的组件
  const changeShowToast = (message) => {
    showToast.value = true;
    toastMessage.value = message;

    setTimeout(() => {
      showToast.value = false;
      toastMessage.value = "";
    }, 2000);
  };

  return { showToast, toastMessage, changeShowToast };
};
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #fff;
}
</style>