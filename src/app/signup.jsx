import { View, Text, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router';
import { UserService } from '../services/api/UserService';
import DateTimePicker from '@react-native-community/datetimepicker';



const SignupPage = () => {
    const userService = new UserService();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState(null);
    const [error, setError] = useState(null);

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setNascimento(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const handleCadastro = async () => {
        const signupRequest = {
            nomeCompleto: nome,
            email: email,
            senha: senha,
            cpf: cpf,
            dataNascimento: nascimento
        };
        if (!signupRequest.nomeCompleto || !signupRequest.email || !signupRequest.senha || !signupRequest.cpf || !signupRequest.dataNascimento) {
            return setError('Campo(s) obrigatório(s) faltando.');
        } else {
            setError(null);
        }
        try {
            const signupResponse = await userService.signup(signupRequest);
            if (signupResponse) {
                Alert.alert('Cadastro concluido!', 'Verifique seu email!')
                router.push('/');
            } else {
                Alert.alert('Erro no cadastro', 'Verifique os dados e tente novamente.');
            }
        } catch (error) {
            Alert.alert('Erro ao fazer cadastro', error.message || 'Algo inesperado aconteceu.');
        }
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
                            <TextInput placeholder='Digite seu nome' onChangeText={setNome} value={nome}></TextInput>
                        </View>
                    </View>
                    <View className='w-full m-2'>
                        <View>
                            <Text className='text-blue-600 font-medium text-xl'>Email</Text>
                        </View>
                        <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                            <TextInput placeholder='Digite seu email' onChangeText={setEmail} value={email}></TextInput>
                        </View>
                    </View>
                    <View className='w-full m-2'>
                        <View>
                            <Text className='text-blue-600 font-medium text-xl'>CPF</Text>
                        </View>
                        <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                            <TextInput placeholder='Digite seu cpf' onChangeText={setCpf} value={cpf}></TextInput>
                        </View>
                    </View>
                    <View className='w-full m-2'>
                        <View>
                            <Text className='text-blue-600 font-medium text-xl'>Senha</Text>
                        </View>
                        <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                            <TextInput placeholder='Digite sua senha' secureTextEntry onChangeText={setSenha} value={senha}></TextInput>
                        </View>
                    </View>
                    <View className='w-full m-2'>
                        <View>
                            <Text className='text-blue-600 font-medium text-xl'>Confirmar senha</Text>
                        </View>
                        <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                            <TextInput placeholder='Confirme sua senha' secureTextEntry></TextInput>
                        </View>
                    </View>
                    <View className='w-full m-2'>
                        <View>
                            <Text className='text-blue-600 font-medium text-xl'>Data de nascimento</Text>
                        </View>
                        <View className='border-gray-300 border-solid border-[1px] rounded-lg w-full'>
                            {show && (
                                <DateTimePicker
                                    value={nascimento || new Date()} // Usa a data atual como padrão
                                    mode="date"
                                    onChange={onChange}
                                />
                            )}
                            <TouchableOpacity onPress={showDatepicker}>
                                <TextInput
                                    placeholder='Selecione sua data de nascimento'
                                    value={nascimento ? nascimento.toLocaleDateString() : ''}
                                    editable={false}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className='w-full'>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => handleCadastro()} className='bg-blue-400 rounded-2xl w-full min-h-[35px] items-center justify-center'>
                            <Text className='text-white font-bold'>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                    {error && <Text style={{ color: 'red' }}>{error}</Text>}
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