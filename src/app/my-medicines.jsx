import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fontisto from '@expo/vector-icons/Fontisto';
import Slider from '../components/Slider';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Card from '../components/Card';

const MyMedicines = () => {
    return (
            <View className='p-2'>
              <Text>Inicio</Text>
                <Card></Card>
            </View>
          )
}

export default MyMedicines