import React, { useState } from 'react'
import { View, Text } from 'react-native-tailwind'
import { Image, Modal, Button, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from './../styles/global'
import { StyledText } from '../styles/global'
import Icon from "react-native-vector-icons/MaterialIcons"
import Icon2 from "react-native-vector-icons/FontAwesome5"
import * as Animatable from 'react-native-animatable';

function ToggleSwitchComp(props) {
  return (
    <View className='pr-1' style={globalStyles.tiger}>
      <Icon2 name={props.toggle} size={35} />
    </View>
  )
}

const OptionsModal = (props) => {
  const [ToggleSwitchPerson, setToggleSwitchPerson] = useState('toggle-on')
  const [ToggleSwitchAction, setToggleSwitchAction] = useState('toggle-off')
  const [ToggleSwitchObject, setToggleSwitchObject] = useState('toggle-off')

  function ToggleSwitch() {
    if (ToggleSwitchPerson == "toggle-on") {
      setToggleSwitchPerson("toggle-off")
    } else {
      setToggleSwitchPerson("toggle-on")
    }
  }
  function ToggleSwitch2() {
    if (ToggleSwitchAction == "toggle-on") {
      setToggleSwitchAction("toggle-off")
    } else {
      setToggleSwitchAction("toggle-on")
    }
  }
  function ToggleSwitch3() {
    if (ToggleSwitchObject == "toggle-on") {
      setToggleSwitchObject("toggle-off")
    } else {
      setToggleSwitchObject("toggle-on")
    }
  }
  
  return (
    <Modal visible={props.ModalOpen} transparent={true} aimationType={'slide'} >
      <View style={{ ...globalStyles.centerEverything, ...globalStyles.flashcardModal, backgroundColor: '#a6a4a3' }}>
        <View className="bg-white p-8 flex" style={{ ...globalStyles.flashcard, borderRadius: 25, width: '90%', height: '80%' }}>
          <View className="flex justify-center items-center justify-around h-full">

            <Animatable.Text animation="pulse" iterationCount="infinite" direction="alternate" style={{ height: 200 }}>
              <Image source={require('../assets/playing-cards-png-11-original.png')} style={{ height: 120, width: 120, }} />
            </Animatable.Text>

            <View className="flex flex-row w-full justify-center px-8">
              <TouchableOpacity onPress={ToggleSwitch} style={{ flexDirection: 'row' }}>
                <StyledText>person</StyledText>
                <ToggleSwitchComp toggle={ToggleSwitchPerson} />
              </TouchableOpacity>

              <TouchableOpacity onPress={ToggleSwitch2} style={{ flexDirection: 'row' }}>
                <StyledText>Action</StyledText>
                <ToggleSwitchComp toggle={ToggleSwitchAction} />
              </TouchableOpacity>

              <TouchableOpacity onPress={ToggleSwitch3} style={{ flexDirection: 'row' }}>
                <StyledText>Object</StyledText>
                <ToggleSwitchComp toggle={ToggleSwitchObject} />
              </TouchableOpacity>

            </View>

            <View className='flex flex-row border border-blue rounded'>
              <TouchableOpacity style={{ backgroundColor: '#24A3ED', border: 'blue', width: 150 }}>
                <StyledText style={{ color: 'white' }}>Study Started</StyledText>
              </TouchableOpacity>

              <TouchableOpacity style={{ background: 'green', width: 150 }}>
                <StyledText>Study All</StyledText>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={props.handleOnclick} style={globalStyles.optionBtn}>
              <StyledText style={{ paddingVertical: 10 }}>
                touch me
              </StyledText>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.handleOnclick} style={globalStyles.optionBtn}>
              <StyledText style={{ paddingVertical: 10 }}>
                one more
              </StyledText>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.handleOnclick} style={{ ...globalStyles.optionBtn, width: "50%", backgroundColor: '#568CFF' }}>
              <StyledText style={{ color: 'white', paddingVertical: 5 }}>
                Done
              </StyledText>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </Modal>
  )
}

export default OptionsModal
