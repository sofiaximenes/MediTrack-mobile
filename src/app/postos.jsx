import { View, Text, SafeAreaView } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react'

const Postos = () => {
    return (
        <SafeAreaView>
            <View className='flex-row gap-x-4 p-4 items-center bg-slate-200'>
                <AntDesign name="arrowleft" size={24} color="black" />
                <View className='flex-col'>
                    <Text className='font-bold text-xl'>Postos de Saude</Text>
                    <Text className='text-sm'>Locais que contem o remedio</Text>
                </View>
            </View>
            <View className='flex-col p-4 gap-y-4 bg-cyan-500'>
                <Text className='text-white font-medium text-2xl'>Nome medicamento</Text>
                <Text className='text-white font-medium text-xl'>Tipo remedio</Text>
                <Text className='text-white font-medium text-xl'>Necessita receita:</Text>
            </View>
            <View className='flex-col gap-y-8 p-6'>
                <View className='flex-col bg-slate-200 gap-y-4 p-2 rounded-xl'>
                    <Text className='text-blue-700 font-bold text-2xl'>
                        Nome do posto de saude
                    </Text>
                    <View className='flex-row items-center gap-x-2'>
                        <AntDesign name="phone" size={18} color="black" />
                        <Text className='font-medium text-lg'>
                            telefone
                        </Text>
                    </View>
                    <View className='flex-row items-center gap-x-2'>
                        <Entypo name="location-pin" size={18} color="black" />
                        <Text className='font-medium text-lg'>
                            endereco
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Postos