import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { router } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const CardPostos = ({ posto }) => {

  const { nome, rua, numero, linhasOnibus, distanciaKm, telefone, bairro } = posto;

  const goToMap = () => {
    router.push({
      pathname: '/mapa/single-posto',
      params: {
        postoLat: posto.latitude,
        postoLng: posto.longitude,
        nomePosto: nome,
        ruaPosto: rua,
        numeroPosto: numero,
        bairroPosto: bairro,
        linhasPosto: linhasOnibus,
        telefonePosto: telefone
      },
    });
  };

  return (
    <View style={tw`flex-row bg-white p-4 rounded-xl shadow-md m-2 items-center`}>
      <View style={tw`flex-1`}>
        <Text style={tw`text-base font-semibold text-gray-800 mb-1`}>
          {nome}
        </Text>
        <Text style={tw`text-sm text-gray-600`}>
          <Text style={tw`font-bold`}>Endereço:</Text> {rua}, nº {numero}. Bairro {bairro}
        </Text>
        <Text style={tw`text-sm text-gray-600`}>
          <Text style={tw`font-bold`}>Telefone:</Text> {telefone}
        </Text>
        <Text style={tw`text-sm text-gray-600`}>
          <Text style={tw`font-bold`}>Distância:</Text> {parseFloat(distanciaKm).toFixed(2)} km
        </Text>
        <Text style={tw`text-sm text-gray-600`}>
          <Text style={tw`font-bold`}>Ônibus que passam no local: </Text>{linhasOnibus}
        </Text>
        <View>
          <TouchableOpacity onPress={goToMap} className='flex-row gap-x-2 items-center rounded-lg p-2 self-start bg-slate-100'>
            <FontAwesome5 name="map-marked-alt" size={24} color="black" />
            <Text className='text-blue-700'>Ver no mapa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardPostos;
