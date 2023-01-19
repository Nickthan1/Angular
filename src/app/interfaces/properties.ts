import { PropertyType } from "../enums/property-type";
import { User } from "./user";
export interface Properties {
    id: number;
    isActive: boolean;
    propertyIdentificationNumber: string;
    address: string;
    yearOfConstruction: number;
    propertyType: PropertyType;
    owner: User;
}