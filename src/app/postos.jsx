import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import CardPostos from '../components/CardPostos';
import HeaderMenu from '../components/HeaderMenu';
import useUserLocation from '../hooks/useUserLocation';
import { PostoService } from '../services/api/PostoService';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { LoadingSpinner } from '../components/LoadingSpinner';

const Postos = () => {
  const [postos, setPostos] = useState([]);
  const [postosLoading, setPostosLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const postoService = new PostoService();
  const { location, loading: locationLoading, errorMsg } = useUserLocation();

  // 
  // {"bairro": "Pirambu", 
  // "distanciaKm": 6.03, 
  // "id": "c0372982-1700-4b46-b5e6-34da959d733a",
  //  "linhasOnibus": "16, 51, 55, 92, 101, 120, 130, 132, 711, 725",
  //  "nome": "Posto de Saude Guiomar Arruda",
  //  "numero": "6",
  //  "rua": "Rua Gal Costa Matos",
  //  "telefone": "(85) 3452-6377"}

  useEffect(() => {
    if (!locationLoading && location) {
      const fetchPostosProximos = async () => {
        setPostosLoading(true);
        try {
          const response = await postoService.SearchPostosProximos(location);
          console.log(response);
          setPostos(response);
        } catch (err) {
          setError("Erro ao carregar os postos");
          console.log(err);
        } finally {
          setPostosLoading(false);
        }
      };

      fetchPostosProximos();
    }
  }, [locationLoading]);

  const navigateToMapaGeral = () => {
    router.navigate('/mapa/mapa-geral')
  }


  if (locationLoading || postosLoading) {
    return (
      <LoadingSpinner text="Procurando postos próximos..."/>
    )
  }

  return (
    <View style={tw`flex-1 bg-blue-800`}>
      <HeaderMenu />

      <SafeAreaView style={tw`flex-1 bg-white`}>

        <View style={tw`flex-row items-center px-4 py-3 bg-slate-100`}>
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`ml-4 text-xl font-bold text-blue-900`}>Postos próximos</Text>
          <View className='absolute right-4'>
            <TouchableOpacity onPress={navigateToMapaGeral}
              className='flex-row gap-x-2 items-center'
            >
              <FontAwesome5 name="map-marked-alt" size={18} color="black" />
              <Text className='text-blue-700'>Ver todos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={postos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CardPostos
              posto={item}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Postos;
