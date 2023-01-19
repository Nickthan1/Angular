import { Properties } from './properties';
import { PropertyRepairType } from "../enums/propertyRepair-type";
import { StatusType } from "../enums/status-type";

export interface PropertyRepair {
    Property: Properties;
    id: number;
    repairType: PropertyRepairType ;
    description: string;
    workToBeDone: String;
    proposedStartDate: String;
    proposedEndDate: String;
    cost: number;
    ownerAcceptance: boolean;
    status: StatusType;
    actualStartDate: String;
    actualEndDate: String;
    isActive: boolean;
}