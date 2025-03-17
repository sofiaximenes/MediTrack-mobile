import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View>
      <Link href="signup">Signup</Link>
      <Link href="recovery-password">RecoveryPassword</Link>
      <Text>Home</Text>
      <Link href="login">Login</Link>
    </View>
  )
}

export default Home

