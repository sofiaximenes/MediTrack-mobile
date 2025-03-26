import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View className='p-2'>
      <Text>Inicio</Text>
      <Link href="signup">Signup</Link>
      <Link href="recovery-password">RecoveryPassword</Link>
      <Link href="login">Login</Link>
      <Link href='home'>Pagina inicial</Link>
    </View>
  )
}

export default Index


