import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

const CardPostos = ({ nomePosto, enderecoPosto, imagemUrl }) => {
  return (
    <View style={tw`flex-row bg-white p-4 rounded-xl shadow-md m-2 items-center`}>
      
      <Image
        source={{ uri: imagemUrl }}
        style={tw`w-16 h-16 rounded-lg mr-4`}
        resizeMode="cover"
      />
      
      <View style={tw`flex-1`}>
        <Text style={tw`text-base font-semibold text-gray-800 mb-1`}>
          {nomePosto}
        </Text>
        <Text style={tw`text-sm text-gray-600`}>
          {enderecoPosto}
        </Text>
      </View>
    </View>
  );
};

export default CardPostos;
