import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Home = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <SafeAreaView className='flex-col gap-10 pt-2'>

                    <View className='azul1 p-3 flex-row items-center rounded-xl gap-2 mx-5 shadow-lg shadow'>
                        <View>
                            <Fontisto name="pills" size={28} color="#1e5067" />
                        </View>
                        <View className='border border-[#159ab7] rounded-xl flex-1 mr-12'>
                            <TextInput placeholder='Procure um remedio' placeholderTextColor='#1e5067'></TextInput>
                        </View>
                    </View>
                    <View className='flex-row items-center gap-10 mx-5 justify-between'>
                        <TouchableOpacity activeOpacity={0.7} className='bg-[#159ab7] rounded-xl shadow-lg shadow-blue-700'>
                            <View className='flex-col gap-1 items-center p-2'>
                                <FontAwesome name="medkit" size={36} color="white" />
                                <Text className='text-white font-semibold text-lg'>Meus salvos</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} className='bg-[#159ab7] rounded-xl shadow-lg shadow-blue-700'>
                            <View className='flex-col gap-1 items-center p-2'>
                                <FontAwesome5 name="hospital" size={36} color="white" />
                                <Text className='text-white font-semibold text-lg'>Encontrar postos</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Home