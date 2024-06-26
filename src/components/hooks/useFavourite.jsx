import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useFavourite = () => {
    const { data: favouriteList, refetch } = useQuery({
        queryKey: ['favouriteList'],
        queryFn: async () => {
            const res = await axios.get('https://radar-server-ruddy.vercel.app/favouriteList');
            return res.data;
        }
    })
    return [favouriteList, refetch]
};

export default useFavourite;