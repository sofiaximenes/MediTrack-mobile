import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import Card from '../components/Card';
import HeaderMenu from '../components/HeaderMenu';

const MyMedicines = () => {
  const router = useRouter(); // isso deve estar fora do return

  const remedios = [
    {
      nomeRemedio: 'Paracetamol',
      descricaoRemedio: 'Analgésico e antipirético usado para alívio da dor e febre.',
      imagemUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
    },
    {
      nomeRemedio: 'Ibuprofeno',
      descricaoRemedio: 'Medicamento anti-inflamatório não esteroide usado para dor e inflamações.',
      imagemUrl: 'https://images.unsplash.com/photo-1588776814546-ec7d7381cc34',
    },
    {
      nomeRemedio: 'Amoxicilina',
      descricaoRemedio: 'Antibiótico usado no tratamento de infecções bacterianas.',
      imagemUrl: 'https://images.unsplash.com/photo-1597764699514-44cfba1b2fa3',
    },
    {
      nomeRemedio: 'Loratadina',
      descricaoRemedio: 'Antialérgico utilizado para tratar rinite alérgica e urticária.',
      imagemUrl: 'https://images.unsplash.com/photo-1580281657521-4d43a5f4f14e',
    },
    {
      nomeRemedio: 'Omeprazol',
      descricaoRemedio: 'Usado para tratar problemas gástricos como refluxo e úlcera.',
      imagemUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
    },
  ];

  return (
    <View style={tw`flex-1 bg-blue-800`}>
      <HeaderMenu />

      <SafeAreaView style={tw`flex-1 bg-white`}>
        {/* Topo com botão de voltar */}
        <View style={tw`flex-row items-center px-4 py-3 bg-slate-100`}>
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`ml-4 text-xl font-bold text-blue-900`}>Meus Medicamentos</Text>
        </View>

        {/* Lista de medicamentos */}
        <FlatList
          data={remedios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card
              nomeRemedio={item.nomeRemedio}
              descricaoRemedio={item.descricaoRemedio}
              imagemUrl={item.imagemUrl}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </SafeAreaView>
    </View>
  );
};

export default MyMedicines;
