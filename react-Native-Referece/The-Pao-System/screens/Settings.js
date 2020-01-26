import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native-tailwind'
import { Image } from 'react-native'
import { Constants } from 'expo';
import { StyledText } from '../styles/global'

import Svg, { Circle, Rect, Polygon, Defs, RadialGradient, Stop } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

//~ I have to learn svg to get that border slanted effect on settings screen


const Settings = () => {
  return (
    <View className="relative flex justify-around items-center h-full bg-blue-lightest">

      <View className="absolute w-full h-full">
        <Svg height="1000" width="1000">
          <Defs>
            <RadialGradient
              id="grad"
              cx="150"
              cy="75"
              rx="500"
              ry="500"
              fx="150"
              fy="75"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0" stopColor="#41E2FF" stopOpacity="1" />
              <Stop offset="1" stopColor="#16627F" stopOpacity="1" />
            </RadialGradient>
          </Defs>
          <Polygon
            y="220"
            points="0,4 0,1000 1000,100"
            fill="url(#grad)"
            strokeWidth="1"
          />
        </Svg>
      </View>
      <View className="w-4/5 flex flex-row justify-around items-center">



        <View>
          <TouchableOpacity style={{ marginVertical: 5 }}>
            <StyledText>UserAleksandrov</StyledText>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginVertical: 5 }}>
            <StyledText>td</StyledText>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginVertical: 5 }}>
            <StyledText>td</StyledText>
          </TouchableOpacity>

        </View>
        <Image source={require('../assets/mycat.jpg')} style={{ height: 200, width: 200, borderRadius: 100, }} />
      </View>


      <View className="w-4/5 flex flex-row justify-around items-center">
        <Image source={require('./../assets/gear-option.png')} style={{ height: 125, width: 125 }} />
        <View>
          <TouchableOpacity style={{ marginVertical: 5 }}>
            <StyledText style={{ color: 'white' }}>Change wallpaper</StyledText>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginVertical: 5 }}>
            <StyledText style={{ color: 'white' }}>Sound effect volumn nob</StyledText>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginVertical: 5 }}>
            <StyledText style={{ color: 'white' }}>Themes</StyledText>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginVertical: 5 }}>
            <StyledText style={{ color: 'white' }}>Darkmode</StyledText>
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-4/5 flex flex-row justify-around items-center">
        <View>
          <StyledText style={{ color: 'white' }}>contact us</StyledText>
          <StyledText style={{ color: 'white' }}>td</StyledText>
          <StyledText style={{ color: 'white' }}>td</StyledText>
        </View>
        <Image source={require('./../assets/playing-cards-png-11-original.png')} style={{ height: 125, width: 125 }} />
      </View>

    </View>

  )
}

// Constants.statusBarHeight


export default Settings
