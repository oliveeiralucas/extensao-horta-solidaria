import { ConflictException, ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashPasswd } from 'src/utils/hashPasswd';

@Injectable()
export class UserService 
{
    constructor(private readonly prisma: PrismaService){};

    async Create(createUserDto: CreateUserDto)
    {
        const data = {
            ...createUserDto,
        };

        const existingEmail = await this.prisma.users.findFirst({
            where: {
                email: data.email,
            },
        });
        if (existingEmail) {
            throw new ConflictException('O e-mail já está em uso');
        }

        const hashedPasswd = hashPasswd(data.email, data.password);

        const createdUser = await this.prisma.users.create({
            data: {
                full_name: data.fullName,
                phone: data.phone,
                email: data.email,
                password: hashedPasswd
            }
        })
        
        return {
            message: 'Usuário registrado com sucesso!',
            data: createdUser,
            status: HttpStatus.CREATED,
        };

    }

    async Update(updateUserDto: UpdateUserDto) 
    {

    }

    async GetList(page = 1, limit = 10)
    {
        if (limit > 100) {
            throw new ForbiddenException();
        }
        const skip = (page - 1) * limit;
        const totalCount = await this.prisma.users.count();
        const totalPages = Math.ceil(totalCount / limit);
        const users = await this.prisma.users.findMany({
            skip: skip,
            take: limit,
        });
        return {
            users: users.map((user) => ({
                id: user.id,
                fullname: user.full_name,
                phone: user.phone,
                email: user.email,
                created_at: user.created_at,
            })),
            totalPages,
        };
    }

}

