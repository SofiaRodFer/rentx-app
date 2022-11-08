import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import { 
    Container, 
    InputText, 
    IconContainer, 
    ChangePasswordVisibilityIconContainer
} from './styles';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
}

export function PasswordInput({ iconName, ...rest }: InputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const theme = useTheme()

    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState)
    }

    return (
      <Container>
          <IconContainer>
              <Feather 
                  name={iconName}
                  size={24}
                  color={theme.colors.text_detail}
              />
          </IconContainer>

          <InputText {...rest} secureTextEntry={isPasswordVisible} />

          <ChangePasswordVisibilityIconContainer onPress={handlePasswordVisibilityChange}>
              <IconContainer>
                  <Feather 
                      name={isPasswordVisible ? 'eye' : 'eye-off'}
                      size={24}
                      color={theme.colors.text_detail}
                  />
              </IconContainer>
          </ChangePasswordVisibilityIconContainer>
      </Container>
    );
}