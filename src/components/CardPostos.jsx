import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

const CardPostos = ({ nomePosto, enderecoPosto, numeroPosto, linhasOnibus, distanciaPosto, telefone, bairro}) => {
  return (
    <View style={tw`flex-row bg-white p-4 rounded-xl shadow-md m-2 items-center`}>
      
      <View style={tw`flex-1`}>
        <Text style={tw`text-base font-semibold text-gray-800 mb-1`}>
          {nomePosto}
        </Text>
        <Text style={tw`text-sm text-gray-600`}>
          <Text style={tw`font-bold`}>Endereço:</Text> {enderecoPosto}, nº {numeroPosto}. Bairro {bairro}
        </Text>
        <Text style={tw`text-sm text-gray-600`}>
        <Text style={tw`font-bold`}>Telefone:</Text> {telefone}
        </Text>
        <Text style={tw`text-sm text-gray-600`}>
        <Text style={tw`font-bold`}>Distância:</Text> {parseFloat(distanciaPosto).toFixed(2)} km
        </Text>
        <Text style={tw`text-sm text-gray-600`}>
        <Text style={tw`font-bold`}>Ônibus que passam no local: </Text> nº {linhasOnibus}
        </Text>


      </View>
    </View>
  );
};

export default CardPostos;
