import { View, Text, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import React, { useState, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { MedicamentoService } from '../../services/api/MedicamentoService';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useUserLocation from '../../hooks/useUserLocation';
import CardPostos from '../../components/CardPostos';
import { LoadingSpinner } from '../../components/LoadingSpinner';

const MedicamentoDetails = () => {
    const { medicamentoId } = useLocalSearchParams();
    const [medicamento, setMedicamento] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const medicamentoService = new MedicamentoService();
    const { location, loading: locationLoading, errorMsg } = useUserLocation();

    useEffect(() => {
        if (!locationLoading && location) {
            const fetchMedicamentoDetails = async () => {
                try {
                    setLoading(true);
                    const response = await medicamentoService.GetAllPostosByMedicamentoId(medicamentoId, location);
                    console.log(response)
                    setMedicamento(response);
                    setLoading(false);
                } catch (err) {
                    setError("Erro ao carregar os detalhes do medicamento.");
                    setLoading(false);
                }
            };
            fetchMedicamentoDetails();
        }
    }, [locationLoading]);

    if (loading || locationLoading) {
        return (
            <LoadingSpinner text='Procurando nos estoques dos postos...'/>
        )
    }

    return (
        <SafeAreaView className="flex-1">
            <View>
                <View className='flex-row gap-x-4 p-4 items-center bg-slate-200'>
                    <AntDesign name="arrowleft" size={24} color="black" />
                    <View className='flex-col'>
                        <Text className='font-bold text-xl'>Postos de Saude</Text>
                        <Text className='text-sm'>Locais que contem o medicamento</Text>
                    </View>
                </View>

                <View className='flex-col p-4 gap-y-4 bg-cyan-500'>
                    <Text className='text-white font-medium text-2xl'>{medicamento.nomeMedicamento}</Text>
                    <Text className='text-white font-medium text-lg'>{medicamento.tipoMedicamento}</Text>
                    {medicamento.necessitaReceita && (
                        <View className="flex-row items-center bg-yellow-900/40 p-2 rounded-md">
                            <FontAwesome name="exclamation-circle" size={18} color="yellow" />
                            <Text className="text-yellow-300 text-sm ml-2">
                                Este medicamento necessita de receita medica.
                            </Text>
                        </View>
                    )}
                </View>
            </View>
            <ScrollView contentContainerStyle={{ padding: 12 }} showsVerticalScrollIndicator={false}>
                {medicamento.postos?.map((posto) => (
                    <CardPostos
                        key={posto.postoId}
                        posto={{
                            nome: posto.nomePosto,
                            rua: posto.ruaPosto,
                            numero: posto.numeroPosto,
                            bairro: posto.bairroPosto,
                            linhasOnibus: posto.linhasOnibus,
                            telefone: posto.telefone,
                            latitude: posto.latitude,
                            longitude: posto.longitude,
                            distanciaKm: posto.distanciaKm
                        }}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default MedicamentoDetails