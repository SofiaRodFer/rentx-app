import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { useTheme } from 'styled-components';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';

import { Container, Header, Steps, Title, Subtitle, Form, FormTitle } from './styles';
import { PasswordInput } from '../../../components/PasswordInput';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()

  const { user } = route.params as Params

  function handleRegister() {
    if(!password || !passwordConfirm) {
      return Alert.alert('Opa', 'Informe a senha e a confirmação')
    }

    if(password != passwordConfirm) {
      return Alert.alert('Opa', 'As senhas não são iguais')
    }

    navigation.navigate('Confirmation', {
      message: `Agora é só fazer login\ne aproveitar.`,
      title: "Conta criada!",
      nextScreenRoute: "SignIn"
    })
  }

  function handleBack() {
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />

            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>

          <Title>Crie sua {'\n'}conta</Title>
          <Subtitle>Faça seu cadastro de {'\n'}forma rápida e fácil</Subtitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>

            <PasswordInput 
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />

            <PasswordInput 
              iconName="lock"
              placeholder="Repetir Senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>

          <Button 
            title="Cadastrar"
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}