import React, { Component, useState } from 'react';
import { View, Text } from 'react-native-tailwind';
import { Image, Modal, Button, Animated, StyleSheet, Easing } from 'react-native';
import { globalStyles } from './../styles/global'
import Icon from "react-native-vector-icons/MaterialIcons";
import OptionsModal from '../components/OptionsModal';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import CardFlip from 'react-native-card-flip';

export default class Flashcards extends Component {
  constructor() {
    super();
    this.state = {
      ModalOpen: false
    };
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick() {
    this.setState({
      ModalOpen: !this.state.ModalOpen
    })
  }

  //~ I got the dummy data and now to make the logic.

  render() {
    return (
      <View className="w-full h-full flex flex-row justify-center">

        <OptionsModal handleOnclick={this.handleOnclick} ModalOpen={this.state.ModalOpen} />
        <View className="relative bg-blue-lightest" style={globalStyles.centerEverything}>
          {this.state.ModalOpen ? (
            <View style={{ ...globalStyles.settingsIconImg }}>
              <TouchableOpacity onPress={() => this.setState({ ModalOpen: false })}>
                <Icon name="settings-input-component" color="rgba(24,24,20,0)" size={28} />
              </TouchableOpacity>
            </View>
          ) : (
              <View style={{ ...globalStyles.settingsIconImg }}>
                <TouchableOpacity onPress={() => this.setState({ ModalOpen: true })}>
                  <Icon name="settings-input-component" color="#181814" size={28} />
                </TouchableOpacity>
              </View>
            )}

          <CardFlip style={globalStyles.cardFlip} ref={(card) => this.card = card} duration={350} >
            <TouchableHighlight underlayColor={'white'} style={globalStyles.card} onPress={() => this.card.flip()} >
              <View className="flex flex-col h-full items-center justify-center">
                <View className="w-full h-12">
                  <Text className="text-center text-3xl">Number</Text>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'white'} style={globalStyles.card} onPress={() => this.card.flip()} >
              <View className="flex flex-col h-full items-center justify-center">
              <View className="w-full h-12">
                  <Text className="text-center text-3xl">P A O</Text>
                </View>
              </View>
            </TouchableHighlight>
          </CardFlip>
        </View>

      </View>
    )
  }
}
