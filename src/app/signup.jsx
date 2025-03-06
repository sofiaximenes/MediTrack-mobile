import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';

const SignupPage = () => {
    const handleCadastro = () => {

    }
    return (
        <SafeAreaView>
                <View className='items-center justify-center h-full'>
                    <View className='flex-col w-full items-center p-12'>
                        <View>
                            <Text className='text-blue-600 font-bold text-2xl'>Cadastro</Text>
                        </View>
                        <View className='w-full m-2'>
                            <View>
                                <Text className='text-blue-600 font-medium text-xl'>Nome</Text>
                            </View>
                            <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                                <TextInput placeholder='Digite seu nome'></TextInput>
                            </View>
                        </View>
                        <View className='w-full m-2'>
                            <View>
                                <Text className='text-blue-600 font-medium text-xl'>Email</Text>
                            </View>
                            <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                                <TextInput placeholder='Digite seu email'></TextInput>
                            </View>
                        </View>
                        <View className='w-full m-2'>
                            <View>
                                <Text className='text-blue-600 font-medium text-xl'>CPF</Text>
                            </View>
                            <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                                <TextInput placeholder='Digite seu cpf'></TextInput>
                            </View>
                        </View>
                        <View className='w-full m-2'>
                            <View>
                                <Text className='text-blue-600 font-medium text-xl'>Senha</Text>
                            </View>
                            <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                                <TextInput placeholder='Digite sua senha'></TextInput>
                            </View>
                        </View>
                        <View className='w-full m-2'>
                            <View>
                                <Text className='text-blue-600 font-medium text-xl'>Confirmar senha</Text>
                            </View>
                            <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                                <TextInput placeholder='Confirme sua senha'></TextInput>
                            </View>
                        </View>
                        <View className='w-full m-2'>
                            <View>
                                <Text className='text-blue-600 font-medium text-xl'>Data de nascimento</Text>
                            </View>
                            <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                                <TextInput placeholder='Selecione sua data de nascimento'></TextInput>
                            </View>
                        </View>
                        <View className='w-full'>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => handleCadastro()} className='bg-blue-400 rounded-2xl w-full min-h-[35px] items-center justify-center'>
                                <Text className='text-white font-bold'>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                        <View className='flex-row mt-6'>
                            <Text>Já tem uma conta?</Text>
                            <Link className='ml-2 text-blue-600 font-bold' href="/login">Fazer login</Link>
                        </View>
                    </View>
                </View>
        </SafeAreaView>
    )
}

export default SignupPage