import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'
import { format, parseISO } from 'date-fns'

import { Car as ModelCar } from '../../databases/models/Car';
import api from '../../services/api';

import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { LoadAnimation } from '../../components/LoadAnimation';

import {
    Container, 
    Header, 
    Title, 
    Subtitle,
    Content,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,
    CarWrapper,
    CarFooter,
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate,
} from './styles';

interface DataProps {
    id: string;
    car: ModelCar;
    start_date: string;
    end_date: string;
}

export function MyCars() {
    const [cars, setCars] = useState<DataProps[]>([])
    const [loading, setLoading] = useState(true)
    const screenIsFocused = useIsFocused()

    const navigation = useNavigation<any>()
    const theme = useTheme()

    function handleBack() {
        navigation.goBack()
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get(`/rentals`)
                const dataFormatted = response.data.map((data: DataProps) => {
                    return {
                        id: data.id,
                        car: data.car,
                        start_date: format(parseISO(data.start_date), 'dd/MM/yyyy'),
                        end_date: format(parseISO(data.end_date), 'dd/MM/yyyy'),
                    }
                })

                setCars(dataFormatted)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchCars()
    }, [screenIsFocused])

    return (
      <Container>
        <Header>
            <StatusBar
              barStyle='light-content'
              translucent
              backgroundColor="transparent"
            />
            <BackButton
              onPress={handleBack}
              color={theme.colors.shape}
            />

            <Title>
              Escolha uma {'\n'}
              data de in??cio e {'\n'}
              fim do aluguel
            </Title>

            <Subtitle>Conforto, seguran??a e praticidade.</Subtitle>
        </Header>

        { loading ? <LoadAnimation /> :
            <Content>
                <Appointments>
                    <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                    <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
                </Appointments>
        
                <FlatList 
                    data={cars}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <CarWrapper>
                            <Car data={item.car} />
                            <CarFooter>
                                <CarFooterTitle>Per??odo</CarFooterTitle>
                                <CarFooterPeriod>
                                    <CarFooterDate>{item.start_date}</CarFooterDate>
                                    <AntDesign 
                                        name="arrowright"
                                        size={20}
                                        color={theme.colors.title}
                                        style={{ marginHorizontal: 10 }}
                                    />
                                    <CarFooterDate>{item.end_date}</CarFooterDate>
                                </CarFooterPeriod>
                            </CarFooter>
                        </CarWrapper>
                )}
                />
            </Content>
        }

      </Container>
    );
}