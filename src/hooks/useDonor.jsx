import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useDonor = () => {
    const { user } = useAuth();
    const axiosInstance = useAxios();

    const { data: isDonor, isPending: isDonorLoading } = useQuery({
        queryKey: [user?.email, 'isDonor'],
        queryFn: async () => {
            const res = await axiosInstance.get(`/users/user/${user.email}`)
            return res.data?.donor;
        },
        enabled: !!user?.email
    })
    return [isDonor, isDonorLoading]
};

export default useDonor;