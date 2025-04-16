import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import tw from 'twrnc';

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={tw`bg-blue-800 px-4 py-3`}>
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        style={tw`flex-row items-center justify-between`}
      >
        <Feather name="menu" size={24} color="white" />
        <Feather name={open ? 'chevron-up' : 'chevron-down'} size={20} color="white" />
      </TouchableOpacity>

      {open && (
        <View style={tw`mt-2`}>
          <Link href="/signup" asChild>
            <TouchableOpacity style={tw`py-2`}>
              <Text style={tw`text-white text-base`}>Signup</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/recovery-password" asChild>
            <TouchableOpacity style={tw`py-2`}>
              <Text style={tw`text-white text-base`}>Recovery Password</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/login" asChild>
            <TouchableOpacity style={tw`py-2`}>
              <Text style={tw`text-white text-base`}>Login</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/home" asChild>
            <TouchableOpacity style={tw`py-2`}>
              <Text style={tw`text-white text-base`}>Página Inicial</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}
    </View>
  );
};

export default HeaderMenu;
