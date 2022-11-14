import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo'

import { Car as ModelCar } from '../../databases/models/Car';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage
} from './styles';


interface Props extends TouchableOpacityProps {
    data: ModelCar;
}

export function Car({ data, ...rest }: Props) {
    const MotorIcon = getAccessoryIcon(String(data.fuel_type))
    const netInfo = useNetInfo()

    return (
      <Container {...rest}>
          <Details>
              <Brand>{data.brand}</Brand>
              <Name>{data.name}</Name>

              <About>
                  <Rent>
                      <Period>{data.period}</Period>
                      <Price>R$ {netInfo.isConnected ? data.price : '...'}</Price>
                  </Rent>

                  <Type>
                      <MotorIcon />
                  </Type>
              </About>
          </Details>

          <CarImage
              source={{ uri: data.thumbnail }}
              resizeMode="contain"
          />
      </Container>
    );
}