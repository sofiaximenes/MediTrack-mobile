import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";
import { MedicamentoService } from "../../services/api/MedicamentoService";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [medicamentos, setMedicamentos] = useState([]);
  const [error, setError] = useState(null);
  const { top } = useSafeAreaInsets();
  const router = useRouter();

  const medicamentoService = new MedicamentoService();

  const fetchMedicamentos = async (query) => {
    if (query.length < 3) {
      setMedicamentos([]);
      return;
    }

    try {
      const result = await medicamentoService.SearchMedsPorNome(query);
      setMedicamentos(result);
      setError(null);
    } catch (err) {
      setError("Erro ao buscar medicamentos.");
      setMedicamentos([]);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchMedicamentos(searchQuery);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSelectMedicamento = (med) => {
    router.push(`/medicamento/${med.medicamentoId}`);
  };

  return (
    <View style={tw`flex-1 bg-blue-800`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={tw`flex-1 bg-white`}>


          <View style={tw`flex-row items-center px-4 py-3 bg-slate-100`}>
            <TouchableOpacity onPress={() => router.back()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={tw`ml-4 text-xl font-bold text-blue-900`}>Buscar Medicamentos</Text>
          </View>


          <View style={tw`px-4 mt-4`}>
            <TextInput
              style={tw`bg-gray-200 text-black rounded-md px-4 py-3`}
              placeholder="Digite o nome do medicamento..."
              placeholderTextColor="#555"
              onChangeText={setSearchQuery}
              value={searchQuery}
              returnKeyType="search"
              autoFocus
            />
          </View>


          <View style={tw`flex-row items-center px-4 py-2 mt-4 bg-yellow-200/80 border border-yellow-400 mx-4 rounded-md`}>
            <Ionicons name="document-lock-outline" size={20} color="#92400e" />
            <Text style={tw`ml-2 text-yellow-900 text-base`}>
              Medicamentos com este ícone necessitam de receita médica.
            </Text>
          </View>


          {error && (
            <Text style={tw`text-red-500 text-center mt-4`}>{error}</Text>
          )}
          {searchQuery.length >= 3 && medicamentos.length === 0 && !error && (
            <Text style={tw`text-gray-700 text-center mt-6`}>Nenhum resultado encontrado</Text>
          )}


          {medicamentos.length > 0 && (
            <FlatList
              data={medicamentos}
              keyExtractor={(item) => item.medicamentoId.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelectMedicamento(item)}
                  style={tw`border-b border-gray-200 px-4 py-4 flex-row justify-between items-center`}
                >
                  <View style={tw`w-4/5`}>
                    <Text style={tw`text-blue-900 text-lg font-semibold`}>{item.nomeMedicamento}</Text>
                  </View>
                  {item.necessitaReceita && (
                    <Ionicons name="document-lock-outline" size={20} color="#92400e" />
                  )}
                </TouchableOpacity>
              )}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          )}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </View>
  );
}
