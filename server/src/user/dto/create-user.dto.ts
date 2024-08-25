import { IsString, Length, IsLowercase, IsEmail } from "class-validator";
import { User } from "../entity/user.entity";

export class CreateUserDto extends User
{
    @IsString()
    @Length(5, 255, { message: 'O nome deve conter entre 5 e 255 caracteres' })
    name: string;

    @Length(1, 64)
    @IsEmail(undefined, { message: 'Insira um e-mail válido' })
    email: string;

    @IsString()
    @Length(4, 32, { message: 'O telefone deve conter entre 4 e 20 caracteres' })
    phone: string;

    @IsString()
    @Length(4, 20, { message: 'A senha deve conter entre 4 e 20 caracteres' })
    password: string;
}