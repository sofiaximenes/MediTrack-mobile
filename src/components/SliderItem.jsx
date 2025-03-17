import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('screen');

const SliderItem = ({ item, index }) => {
    return (
        <View className='justify-center items-center gap-5' style={{ width: width }}>
            <Image source={item.image} className='w-[300px] h-[250px] rounded-3xl' />
            <View className='absolute w-[300px] h-[250px]'>
                <View className='gap-[5px] absolute bottom-0 bg-slate-400 opacity-85 w-full rounded-b-3xl pb-1'>
                    <Text className='text-white font-semibold text-xl ml-3'>{item.title}</Text>
                    <Text className='text-white font-semibold text-base ml-3'>{item.description}</Text>
                </View>
            </View>
        </View>
    )
}

export default SliderItem