import { useEffect, useState } from "react";

const useNetwork = onChange => {
    console.log("navigator.onLine = 웹사이트가 온라인지 체크",`${navigator.onLine}`);
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if(typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect(() =>{
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    });
    return status;
};

export default useNetwork;