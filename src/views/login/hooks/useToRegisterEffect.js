import { useRouter } from "vue-router";

export const useToRegisterEffect = () => {
    const router = useRouter();

    const handleRegister = () => {
        router.push({ name: "Register" });
    };

    return { handleRegister };
};