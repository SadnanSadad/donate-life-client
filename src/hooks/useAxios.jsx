import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://donate-life-server.vercel.app"
})

const useAxios = () =>{
    return axiosInstance;
}

export default useAxios;