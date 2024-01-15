import { useNavigate } from "react-router-dom";

export const Navigate = (params) => {
    const nav = useNavigate();
    nav(params);
};
