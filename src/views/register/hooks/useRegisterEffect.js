import { ref } from "vue";
import { useRouter } from "vue-router";
import { czm_post } from "../../../utils/request";

// 注册相关逻辑
export const useRegisterEffect = (changeShowToast) => {
    const router = useRouter();

    const username = ref("");
    const password = ref("");
    const ensnarement = ref("");

    // 封装axios
    const handleRegister = async () => {
        try {
            if (username.value === "" || password.value === "" || ensnarement.value === "") {
                changeShowToast("用户名,密码,正确密码不正确")
            } else {
                const result = await czm_post("/api/user/register", {
                    username: username.value,
                    password: password.value,
                    ensnarement: ensnarement.value
                });

                // console.log(result);

                if (result?.errno === 0) {
                    router.push({ name: "Login" });
                } else {
                    // alert("登陆失败");
                    changeShowToast("注册失败");
                }
            }
        } catch (e) {
            changeShowToast("请求失败");
        }
    };

    return { username, password, ensnarement, handleRegister };
};