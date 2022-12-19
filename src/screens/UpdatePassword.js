import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { passwordValidator } from '../helpers/passwordValidator'

export default function UpdatePassword({ navigation }) {
  const [password, setpassword] = useState({ value: '', error: '' })

  const UpdatePasswordEmail = () => {
    const passwordError = passwordValidator(password.value)
    if (passwordError) {
      setpassword({ ...password, error: passwordError })
      return
    }
    navigation.navigate('LoginScreen')
  }


  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Update Password</Header>
      <TextInput
        label="Passwords"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setpassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        autoCapitalize="none"
        autoCompleteType="email"
        //textContentType="emailAddress"
        //keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={UpdatePasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  )
}