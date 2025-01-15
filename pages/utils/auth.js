import jwt from "jsonwebtoken";

export const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem("token");
        if (token) {
            return true
        } else {
            false
        }
    }
}

export const isAdmin = () => {
    if (typeof window !== 'undefined' && isAuthenticated()) {
        const token = localStorage.getItem("token");
        const json = jwt.decode(token);
        if (json.role === 'admin') {
            return true
        } else {
            false
        }
    }
}