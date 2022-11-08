import { TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
`;

export const IconContainer = styled.View`
    height: 56px;
    width: 55px;

    justify-content: center;
    align-items: center;

    margin-right: 2px;

    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const InputText = styled(TextInput)`
    flex: 1;

    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};

    background-color: ${({ theme }) => theme.colors.background_secondary};

    padding: 0 23px;
`;

export const ChangePasswordVisibilityIconContainer = styled(BorderlessButton)`
    height: 56px;
    width: 55px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_secondary};
`;
