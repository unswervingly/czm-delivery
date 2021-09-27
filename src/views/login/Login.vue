<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入用户名"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        type="password"
        v-model="password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <div class="wrapper__login-link" @click="handleRegister">立即注册</div>

    <toast v-if="showToast" :message="toastMessage" />
  </div>
</template>

<script>
// import { ref } from "vue";
// import { useRouter } from "vue-router";
// import axios from "axios";
// 设置首页axios 是"Content-Type"方法
// axios.defaults.headers.post["Content-Type"] = "application/json";
// import { czm_post } from "../../utils/request";

import Toast, { useToastEffect } from "../../components/Toast.vue";
import { useLoginEffect } from "./hooks/useLoginEffect";
import { useToRegisterEffect } from "./hooks/useToRegisterEffect";

export default {
  name: "Login",
  components: {
    Toast,
  },
  setup() {
    const { showToast, toastMessage, changeShowToast } = useToastEffect();
    const { username, password, handleLogin } = useLoginEffect(changeShowToast);

    /* const handleLogin = () => {
      axios
        .post(
          "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login",
          {
            username: username.value,
            password: password.value,
          }
        )
        .then(() => {
          localStorage.isLogin = true;
          router.push({ name: "Home" });
        })
        .catch(() => {
          alert("登陆失败");
        });
    }; 
    */

    const { handleRegister } = useToRegisterEffect();

    return {
      handleLogin,
      handleRegister,
      username,
      password,
      showToast,
      toastMessage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: .06rem;
    &__content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>