import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'
import { format, parseISO } from 'date-fns'

import { Car as ModelCar } from '../../databases/models/Car';
import { CarDTO } from '../../dtos/CarDTO';
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

interface CarProps {
    id: string;
    user_id: string;
    car: CarDTO;
    startDate: string;
    endDate: string;
}

interface DataProps {
    id: string;
    car: ModelCar;
    start_date: string;
    end_date: string;
}

export function MyCars() {
    const [cars, setCars] = useState<DataProps[]>([])
    const [loading, setLoading] = useState(true)

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
    }, [])

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
              data de início e {'\n'}
              fim do aluguel
            </Title>

            <Subtitle>Conforto, segurança e praticidade.</Subtitle>
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
                                <CarFooterTitle>Período</CarFooterTitle>
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