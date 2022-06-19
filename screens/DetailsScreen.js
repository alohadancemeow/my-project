import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is {route.params.name}'s details</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})