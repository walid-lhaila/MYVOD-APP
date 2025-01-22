import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
    name: string;
    _id: string;
    role: string;
    token: string;
}

const useUserData = () => {
    const [userData, setUserData] = useState<User | null>(null);

    const getUserData = async () => {
        try {
            const name = await AsyncStorage.getItem("user");
            const _id = await AsyncStorage.getItem("user");
            const role = await AsyncStorage.getItem("user");
            const token = await AsyncStorage.getItem("token");

            if (name && _id && role && token) {
                setUserData({ name, _id, role, token });
            } else {
                console.error("No User Data Found In AsyncStorage");
            }
        } catch (error) {
            console.error("Error Retrieving User Data From AsyncStorage", error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return userData;
};

export default useUserData;
