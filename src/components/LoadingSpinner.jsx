import React from 'react'
import { ActivityIndicator, Text, SafeAreaView } from 'react-native'

export const LoadingSpinner = ({ text }) => {
    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <ActivityIndicator size={52} color="#00ff00" />
            <Text className='text-xl font-medium text-blue-400'>{text}</Text>
        </SafeAreaView>
    )
}
