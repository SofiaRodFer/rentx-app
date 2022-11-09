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
    value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: InputProps) {
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)

    const theme = useTheme()

    function handleInputFocused() {
        setIsFocused(true)
    }

    function handleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!value)
    }

    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState)
    }

    return (
      <Container isFocused={isFocused}>
          <IconContainer>
              <Feather 
                  name={iconName}
                  size={24}
                  color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
              />
          </IconContainer>

          <InputText 
            {...rest} 
            secureTextEntry={isPasswordVisible} 
            onFocus={handleInputFocused}
            onBlur={handleInputBlur}
          />

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