import { CarDTO } from "../dtos/CarDTO";

interface SignUpSecondStepProps {
    name: string;
    email: string;
    driverLicense: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            SignIn: undefined;
            SignUpFirstStep: undefined;
            SignUpSecondStep: {
                user: SignUpSecondStepProps;
            };
            Home: undefined;
            CarDetails: {
                car: CarDTO;
            };
            Scheduling: {
                car: CarDTO;
            };
            SchedulingDetails: undefined;
            Confirmation: {
                title: string;
                message: string;
                nextScreenRoute: string;
            };
            MyCars: undefined;
        }
    }
}