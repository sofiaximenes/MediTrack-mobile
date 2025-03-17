import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';

const RecoveryPasswordPage = () => {
    const handleRecovery = () => {

    }
    return (
        <SafeAreaView>
                <View className='items-center justify-center h-full'>
                    <Text className='text-blue-600 font-bold text-[32px]'>Meditrack</Text>
                    <View className='items-center mt-4'>
                        <Image
                            source={require('../../assets/login.png')}
                            className='w-60 h-60'
                            resizeMode='contain'
                        />
                    </View>
                    <View className='flex-col w-full items-center p-12'>  
                        <View>
                            <Text className='text-blue-600 font-bold text-2xl mb-4'>Recupere a sua senha</Text>
                        </View>
                        <View>
                            <Text className='text-blue-600x text-x text-center'>Caso você possua uma conta, você receberá um email para gerar uma nova senha.</Text>
                        </View>
                        <View className='w-full m-6'>
                            <View>
                                <Text className='text-blue-600 font-medium text-xl'>Email</Text>
                            </View>
                            <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                                <TextInput placeholder='Digite seu email'></TextInput>
                            </View>
                        </View>
                        <View className='w-full'>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => handleRecovery()} className='bg-blue-400 rounded-2xl w-full min-h-[35px] items-center justify-center'>
                                <Text className='text-white font-bold'>Recuperar a senha</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        </SafeAreaView>
    )
}

export default RecoveryPasswordPage