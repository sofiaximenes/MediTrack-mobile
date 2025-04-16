import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const SliderItem = ({ item }) => {
    return (
        <View style={tw`m-2`}>
            <Image source={item.image} style={tw`w-80 h-48 rounded-xl`} />
            <Text style={tw`text-lg font-bold mt-2`}>{item.title}</Text>
            <Text style={tw`text-sm text-gray-600`}>{item.description}</Text>
        </View>
    );
};

export default SliderItem;
