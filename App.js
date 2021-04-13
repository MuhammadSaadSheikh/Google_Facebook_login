import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'

const App = props => {

  useEffect(() => {
    GoogleSignin.configure({})
  }, [])

  const [isUser, setUser] = useState({})
  console.log("🚀 ~ file: App.js ~ line 16 ~ isUser", isUser)

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      setUser(userInfo)
    } catch (error) {
      console.log("🚀 ~ file: App.js ~ line 15 ~ signIn ~ error", error)
    }
  }

  return <View style={styles.mainContainer} >
    <TouchableOpacity style={styles.btnContainer} onPress={signIn} >
      <Text> Google SignIn </Text>
    </TouchableOpacity>
  </View>
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  btnContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  }
})