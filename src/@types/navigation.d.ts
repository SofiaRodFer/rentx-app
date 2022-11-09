import { CarDTO } from "../dtos/CarDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            SignIn: undefined;
            SignUpFirstStep: undefined;
            SignUpSecondStep: undefined;
            Home: undefined;
            CarDetails: {
                car: CarDTO
            };
            Scheduling: {
                car: CarDTO
            };
            SchedulingDetails: undefined;
            SchedulingComplete: undefined;
            MyCars: undefined;
        }
    }
}