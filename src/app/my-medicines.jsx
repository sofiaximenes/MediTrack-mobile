import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

const MyMedicines = () => {
  return (
    <SafeAreaView>
        <View className='flex-row gap-x-4 p-4 items-center bg-slate-200'>
            <AntDesign name="arrowleft" size={24} color="black" />
            <View className='flex-col'>
                <Text className='font-bold text-xl'>Meus Medicamentos</Text>
            </View>
        </View>
        <View className='flex-col p-4 gap-y-4 bg-cyan-500'>
            <Text className='text-white font-medium text-2xl'>Nome medicamento</Text>
            <Text className='text-white font-medium text-xl'>Tipo remedio</Text>
            <Text className='text-white font-medium text-xl'>Necessita receita:</Text>
        </View>
    </SafeAreaView>
)
}

export default MyMedicines

