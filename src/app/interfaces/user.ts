import { UserRole } from "../enums/user-role";
export interface User {
    id: number;
    name: string;
    surname: string;
    address: string;
    phoneNumber: string;
    email: string;
    username: string;
    password: string;
    vat: string;
    role: UserRole;
    isActive?: boolean;
}