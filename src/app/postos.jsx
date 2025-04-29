import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import CardPostos from '../components/CardPostos';
import HeaderMenu from '../components/HeaderMenu';
import useUserLocation from '../hooks/useUserLocation';
import { PostoService } from '../services/api/PostoService';

const Postos = () => {
  const [postos, setPostos] = useState([]);
  const [postosLoading, setPostosLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const postoService = new PostoService();
  const { location, loading: locationLoading, errorMsg } = useUserLocation();


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

  const remedios = [
    {
      nomePosto: 'Paracetamol',
      enderecoPosto: 'Analgésico e antipirético usado para alívio da dor e febre.',
      distanciaPosto: 2.2
    },
    {
      nomePosto: 'Ibuprofeno',
      enderecoPosto: 'Medicamento anti-inflamatório não esteroide usado para dor e inflamações.',
      distanciaPosto: 3.1
    },
    {
      nomePosto: 'Amoxicilina',
      enderecoPosto: 'Antibiótico usado no tratamento de infecções bacterianas.',
      distanciaPosto: 4.6
    },
    {
      nomePosto: 'Loratadina',
      enderecoPosto: 'Antialérgico utilizado para tratar rinite alérgica e urticária.',
      distanciaPosto: 7.2
    },
    {
      nomePosto: 'Omeprazol',
      enderecoPosto: 'Usado para tratar problemas gástricos como refluxo e úlcera.',
      distanciaPosto: 7.2
    },
  ];

  if (locationLoading || postosLoading) {
    return (
      <View>
        <Text>Procurando postos proximos...</Text>
      </View>)
  }

  return (
    <View style={tw`flex-1 bg-blue-800`}>
      <HeaderMenu />

      <SafeAreaView style={tw`flex-1 bg-white`}>

        <View style={tw`flex-row items-center px-4 py-3 bg-slate-100`}>
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`ml-4 text-xl font-bold text-blue-900`}>Postos proximos</Text>
        </View>

        <FlatList
          data={remedios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CardPostos
              nomePosto={item.nomePosto}
              enderecoPosto={item.enderecoPosto}
              distanciaPosto={item.distanciaPosto}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Postos;
