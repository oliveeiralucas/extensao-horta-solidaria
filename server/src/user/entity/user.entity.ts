export class User
{
    id: number;
    fullName: string;
    phone?: string;
    email: string;
    password: string;
    address?: string;
    birthDate?: Date;
    profilePicture?: string;
    createdAt: Date;
    updatedAt: Date; 
}