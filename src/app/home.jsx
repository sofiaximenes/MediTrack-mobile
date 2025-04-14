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
import { router } from 'expo-router';


const Home = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw`flex-1 bg-white`}
        >
            <ScrollView
                contentContainerStyle={tw`flex-grow`}
                keyboardShouldPersistTaps="handled"
            >
                <View style={tw`flex-col items-center gap-4 p-6`}>
                    {/* User Profile Card */}
                    <View style={tw`bg-white p-5 rounded-xl shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3`}>
                        <View style={tw`flex-row items-center gap-4`}>
                            <Image
                                source={{
                                    uri: 'https://i.pinimg.com/originals/22/91/4f/22914f8e086fa395ec800697af375285.jpg',
                                }}
                                style={tw`w-16 h-16 rounded-full`}
                            />
                            <View>
                                <Text style={tw`text-xl font-semibold text-gray-800 text-center`}>Otavio Adamis</Text>
                                <Text style={tw`text-sm text-gray-500 text-center`}>otavioadamis@gmail.com</Text>
                            </View>
                        </View>
                    </View>

                    {/* Logout Button with icon above text */}
                    <TouchableOpacity style={tw`absolute top-5 right-5 flex-col items-center`}>
                        <MaterialIcons name="exit-to-app" size={24} color="gray" />
                        <Text style={tw`text-xs text-gray-700 mt-1`}>sair</Text>
                    </TouchableOpacity>

                    {/* Welcome Text */}
                    <Text style={tw`text-3xl font-semibold text-gray-800 text-center mb-6`}>Bem-vindo</Text>

                    {/* Search Input Section */}
                    <View style={tw`bg-blue-600 p-3 flex-row items-center justify-center rounded-xl w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg border border-gray-300`}>
                        <FontAwesome5 name="search" size={18} color="white" style={tw`mr-3`} />
                        <TextInput
                            style={tw`text-white font-semibold text-lg ml-2 text-center`}
                            placeholder="Procure um remédio"
                            placeholderTextColor="white"
                        />
                    </View>

                    {/* Buttons Section - Stack buttons vertically */}
                    <View style={tw`flex-col gap-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mt-6`}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={tw`bg-blue-600 rounded-xl shadow-lg py-6`}
                            onPress={() => router.push('/my-medicines')}
                        >
                            <View style={tw`flex-row items-center justify-center`}>
                                <FontAwesome5 name="pills" size={24} color="white" />
                                <Text style={tw`text-white font-semibold text-lg ml-2 text-center`}>Meus Salvos</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={tw`bg-blue-600 rounded-xl shadow-lg py-6`}
                        >
                            <View style={tw`flex-row items-center justify-center`}>
                                <FontAwesome5 name="hospital" size={24} color="white" />
                                <Text style={tw`text-white font-semibold text-lg ml-2 text-center`}>Encontrar Postos</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Home;
