import {useDispatch} from "react-redux";
import UseUserData from "@/app/hooks/useUserData";
import {addFavorite, getMyFavorits} from "@/app/redux/slices/favoriteSlice";
import {useRouter} from "expo-router";


export const useFavorite = () => {
    const dispatch = useDispatch();
    const currentUser = UseUserData();
    const token = currentUser?.token;
    const router = useRouter();

    const handleAddFavorite = async (movieId: string) => {
        try {
            await dispatch(addFavorite({ movieId, token }));
            console.log('FAVORITE ADDED SUCCESSFULLY');
            await dispatch(getMyFavorits({token}));
            router.push('/favoris');
        } catch (error) {
            console.log(error || 'FAILED TO ADD FAVORITE');
        }
    };
    return {handleAddFavorite};
}