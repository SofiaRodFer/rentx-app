import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

import { Container, Header, Steps, Title, Subtitle, Form, FormTitle } from './styles';

export function SignUpSecondStep() {
  const navigation = useNavigation()

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
          <Bullet active />
          <Bullet />
        </Steps>
      </Header>

      <Title>Crie sua {'\n'}conta</Title>
      <Subtitle>Faça seu cadastro de {'\n'}forma rápida e fácil</Subtitle>

      <Form>
        <FormTitle>2. Senha</FormTitle>
        
      </Form>

      <Button 
        title="Próximo"
      />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}