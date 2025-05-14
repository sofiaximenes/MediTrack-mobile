import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useUserLocation from '../../hooks/useUserLocation';
import { useState, useRef } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import tw from 'twrnc';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export default function Mapa() {
    const {
        postoLat,
        postoLng,
        nomePosto,
        ruaPosto,
        numeroPosto,
        bairroPosto,
        linhasPosto,
        telefonePosto
    } = useLocalSearchParams();

    const postoLatNum = parseFloat(postoLat);
    const postoLngNum = parseFloat(postoLng);
    const mapRef = useRef(null);
    const { location, loading: locationLoading, errorMsg } = useUserLocation();
    const [showInfo, setShowInfo] = useState(true);
    const router = useRouter();

    const snapToUser = () => {
        mapRef.current?.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }, 1000);
    };

    const snapToPosto = () => {
        mapRef.current?.animateToRegion({
            latitude: postoLatNum,
            longitude: postoLngNum,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }, 1000);
    };

    if (locationLoading) {
        return (
            <LoadingSpinner text={"Carregando mapa..."} />
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={tw`flex-row items-center px-4 py-3 bg-slate-100`}>
                <TouchableOpacity onPress={() => router.back()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={tw`ml-4 text-xl font-bold text-blue-900`}>Localização do posto</Text>
            </View>
            <MapView
                ref={mapRef}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: parseFloat(location.latitude),
                    longitude: parseFloat(location.longitude),
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: parseFloat(location.latitude),
                        longitude: parseFloat(location.longitude),
                    }}
                    title="Você"
                    pinColor="blue"
                />
                <Marker
                    coordinate={{
                        latitude: parseFloat(postoLat),
                        longitude: parseFloat(postoLng),
                    }}
                    title={nomePosto}
                    description={`${ruaPosto}, ${numeroPosto}`}
                />
            </MapView>

            {showInfo && (
                <View className="absolute bottom-20 left-5 right-5 bg-white rounded-xl p-4 shadow-md">
                    <Text className="text-base font-bold mb-1">{nomePosto}</Text>
                    <Text className="text-sm text-gray-700">
                        {ruaPosto}, nº {numeroPosto} - {bairroPosto}
                    </Text>
                    <Text className="text-sm text-gray-700">Telefone: {telefonePosto}</Text>
                    <Text className="text-sm text-gray-700">Linhas de ônibus: {linhasPosto}</Text>
                </View>
            )}

            <View
                className="absolute bottom-7 left-5">
                <View className='flex-row gap-x-4 items-center'>
                    <TouchableOpacity
                        className='bg-blue-500 px-4 py-2 rounded-full'
                        onPress={() => setShowInfo(!showInfo)}
                        activeOpacity={0.7}
                    >
                        <Text className="text-white font-bold">
                            {showInfo ? 'Ocultar' : 'Ver Detalhes'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className='bg-blue-300 px-4 py-2 rounded-full'
                        onPress={snapToUser}
                    >
                        <AntDesign name="user" size={18} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        className='bg-green-500 px-4 py-2 rounded-full'
                        onPress={snapToPosto}
                    >
                        <MaterialIcons name="local-hospital" size={18} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
