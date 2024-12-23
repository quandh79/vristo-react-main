import api from "./api";

interface User {
    email: string;
    password: string;
}

interface AuthResponse{
    data : any;
}

export const auth_login = async (user: User): Promise<AuthResponse> => {
    const url = "Authentication/login";
    try {
        const rs = await api.post(url, { email: user.email, password: user.password });
        console.log(rs.data.data);
        return rs.data;
    } catch (error) {
        alert("Tài khoản hoặc mật khẩu không đúng");
        return {data : {}};
    }
};