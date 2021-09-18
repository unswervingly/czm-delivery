import { ref } from "vue";
import { useRouter } from "vue-router";
import { czm_post } from "../../../utils/request";

export const useLoginEffect = (changeShowToast) => {
    const router = useRouter();

    const username = ref("");
    const password = ref("");

    // 封装axios
    const handleLogin = async () => {
        try {
            if (username.value === "" || password.value === "") {
                changeShowToast("用户名和密码不正确")
            } else {
                const result = await czm_post("/api/user/login", {
                    username: username.value,
                    password: password.value,
                });

                console.log(result);

                if (result?.errno === 0) {
                    localStorage.isLogin = true;
                    router.push({ name: "Home" });
                } else {
                    // alert("登陆失败");
                    changeShowToast("登陆失败");
                }
            }
        } catch (e) {
            changeShowToast("请求失败");
        }
    };

    return { username, password, handleLogin };
};