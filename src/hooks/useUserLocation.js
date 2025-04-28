import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function useUserLocation() {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            setLoading(true);
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();

                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    setLoading(false);
                    return;
                }

                const { coords } = await Location.getCurrentPositionAsync({});
                setLocation({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                });
            } catch (error) {
                setErrorMsg('Error fetching location');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchLocation();
    }, []);

    return { location, loading, errorMsg };
}