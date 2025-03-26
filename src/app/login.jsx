import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router';
import { UserService } from '../services/api/UserService';

const LoginPage = () => {
    const userService = new UserService();
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        const loginRequest = { email, senha };
        if (!loginRequest.email || !loginRequest.senha) {
            return setError('Campo(s) obrigatório(s) faltando.');
        } else {
            setError(null);
        }
        try {
            const loginResponse = await userService.login(loginRequest);
            console.log(loginResponse)
            if (loginResponse) {
                const { usuario } = loginResponse;
                Alert.alert('Login feito com sucesso', `Bem vindo de volta, ${usuario.nomeCompleto}`);
                router.push('/');
            }
        } catch (error) {
            Alert.alert('Erro de login', error.message || 'Erro inesperado');
        }
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
                        <Text className='text-blue-600 font-bold text-2xl'>Login</Text>
                    </View>
                    <View className='w-full m-6'>
                        <View>
                            <Text className='text-blue-600 font-medium text-xl'>Email</Text>
                        </View>
                        <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                            <TextInput placeholder='Digite seu email' onChangeText={setEmail} value={email}></TextInput>
                        </View>
                    </View>
                    <View className='w-full m-6'>
                        <View>
                            <Text className='text-blue-600 font-medium text-xl'>Senha</Text>
                        </View>
                        <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                            <TextInput placeholder='Digite sua senha' secureTextEntry onChangeText={setSenha} value={senha}></TextInput>
                        </View>
                    </View>
                    <View className='w-full'>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => handleLogin()} className='bg-blue-400 rounded-2xl w-full min-h-[35px] items-center justify-center'>
                            <Text className='text-white font-bold'>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                    {error && <Text style={{ color: 'red' }}>{error}</Text>}
                    <View className='flex-row mt-6'>
                        <Text>Não tem uma conta ainda?</Text>
                        <Link className='ml-2 text-blue-600 font-bold' href="/signup">Cadastre-se!</Link>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginPage