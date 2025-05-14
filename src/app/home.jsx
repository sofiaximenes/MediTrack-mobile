import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import tw from "twrnc";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';
import Slider from '../components/Slider';
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderMenu from "../components/HeaderMenu";

const Home = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw`flex-1 bg-white`}
        >
            <HeaderMenu />
            <ScrollView
                contentContainerStyle={tw`flex-grow`}
                keyboardShouldPersistTaps="handled"
            >
                <SafeAreaView className='flex-col gap-4 py-6'>
                    <View className='flex-col items-center gap-1 mx-5'>
                        <TouchableOpacity activeOpacity={0.2} className='self-end absolute'>
                            <MaterialIcons name="logout" size={28} color="black" />
                        </TouchableOpacity>
                        <FontAwesome name="user-circle" size={64} color="black" />
                        <Text className='font-medium text-2xl'>Otavio Adamis</Text>
                        <View className='flex-row gap-1 items-center justify-between self-start'>
                            <MaterialIcons name="alternate-email" size={16} color="black" />
                            <Text className='font-light text-lg'></Text>
                        </View>
                    </View>

                    <View>
                        <Slider />
                    </View>

                    <View className='flex gap-y-10 px-4 py-2'>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={tw`bg-blue-600 rounded-xl shadow-lg py-6`}
                                onPress={() => router.push('/medicamento/pesquisa')}
                            >
                                <View style={tw`flex-row items-center justify-center`}>
                                    <FontAwesome5 name="search" size={18} color="white" style={tw`mr-3`} />
                                    <Text style={tw`text-white font-semibold text-lg ml-2 text-center`}>Procure um medicamento</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={tw`bg-blue-600 rounded-xl shadow-lg py-6`}
                                onPress={() => router.push('/my-medicines')}
                            >
                                <View style={tw`flex-row items-center justify-center`}>
                                    <FontAwesome5 name="pills" size={24} color="white" />
                                    <Text style={tw`text-white font-semibold text-lg ml-2 text-center`}>Medicamentos salvos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={tw`bg-blue-600 rounded-xl shadow-lg py-6`}
                                onPress={() => router.push('/postos')}
                            >
                                <View style={tw`flex-row items-center justify-center`}>
                                    <FontAwesome5 name="hospital" size={24} color="white" />
                                    <Text style={tw`text-white font-semibold text-lg ml-2 text-center`}>Postos próximos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Home;
