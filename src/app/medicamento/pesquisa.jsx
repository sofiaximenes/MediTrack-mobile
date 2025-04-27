import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MedicamentoService } from '../../services/api/MedicamentoService';
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-emerald-600" style={{ paddingTop: top }}>
        {/* Top bar with back button and input */}
        <View className="flex-row items-center px-4 py-4">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <FontAwesome name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          <TextInput
            className="bg-white text-black rounded-md px-3 py-4 flex-1"
            placeholder="Buscar medicamentos..."
            onChangeText={setSearchQuery}
            value={searchQuery}
            returnKeyType="search"
            autoFocus
          />
        </View>

        <View className="flex-row items-center px-4 py-2 bg-yellow-900/40">
          <Ionicons name="document-lock-outline" size={24} color="white" />
          <Text className="text-yellow-300 text-lg ml-2">
            Medicamentos com este ícone necessitam de receita médica
          </Text>
        </View>

        {/* Medicamentos list */}
        {error && (
          <Text className="text-red-500 text-center">{error}</Text>
        )}

        {searchQuery.length >= 3 && medicamentos?.length === 0 && !error ? (
          <Text className="text-white text-center mt-6">Nenhum resultado encontrado</Text>
        ) : null}

        {medicamentos?.length > 0 && (
          <FlatList
            className=''
            data={medicamentos}
            keyExtractor={(item) => item.medicamentoId.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelectMedicamento(item)}
                className="border-b border-gray-700 flex flex-row justify-between items-center py-4"
              >
                <View className='w-4/5 ml-3'>
                  <Text className="text-white text-lg font-medium">{item.nomeMedicamento}</Text>
                </View>
                {item.necessitaReceita && (
                  <View className='mr-3'>
                    <Ionicons name="document-lock-outline" size={24} color="white" />
                  </View>
                )}
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
