import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fontisto from '@expo/vector-icons/Fontisto';
import Slider from '../components/Slider';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { router } from 'expo-router';

const Home = () => {
    const handlePostos = async () => {
        router.push('/postos');
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <SafeAreaView className='flex-col gap-10 pt-2'>
                    <View className='flex-col items-center gap-1 mx-5'>
                        <TouchableOpacity activeOpacity={0.2} className='self-end absolute'>
                            <MaterialIcons name="logout" size={28} color="black" />
                        </TouchableOpacity>
                        <FontAwesome name="user-circle" size={64} color="black" />
                        <Text className='font-medium text-2xl'>Otavio Adamis</Text>
                        <View className='flex-row gap-1 items-center justify-between self-start'>
                            <MaterialIcons name="alternate-email" size={16} color="black" />
                            <Text className='font-light text-lg'>otavioadamis@gmail.com</Text>
                        </View>
                    </View>
                    <View>
                        <Slider />
                    </View>
                    <View className='bg-cyan-400 p-3 flex-row items-center rounded-xl gap-2 mx-5 shadow-lg shadow-cyan-400'>
                        <View>
                            <Fontisto name="pills" size={28} color="black" />
                        </View>
                        <View className='flex-1 p-2'>
                            <TouchableOpacity onPress={() => router.push("medicamento/pesquisa")}>
                            <Text className='text-white font-semibold text-lg'>Buscar medicamentos</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className='flex-row items-center gap-10 mx-5 justify-between'>
                        <TouchableOpacity activeOpacity={0.7} className='bg-[#7197ff] rounded-xl shadow-lg shadow-blue-700'>
                            <View className='flex-col gap-1 items-center p-2'>
                                <FontAwesome name="medkit" size={36} color="white" />
                                <Text className='text-white font-semibold text-lg'>Meus salvos</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => handlePostos()} className='bg-[#7197ff] rounded-xl shadow-lg shadow-blue-700'>
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