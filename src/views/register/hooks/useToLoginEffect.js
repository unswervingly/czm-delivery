import { useRouter } from "vue-router";

export const useToLoginEffect = () => {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push({ name: "Login" });
    };

    return { handleLoginClick };
};