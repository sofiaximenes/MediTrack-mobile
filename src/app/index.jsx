import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View>
      <Link href="signup">Signup</Link>
      <Text>Home</Text>
    </View>
  )
}

export default Home