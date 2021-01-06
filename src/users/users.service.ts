import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './createUser.dto';
import { User } from './User';
import {v1 as uuid} from 'uuid'
import { UpdateUserDto } from './updateUser.dto';

@Injectable()
export class UserService {

    users: User[] = []

    getAllUsers(): User[]{
        return this.users
    }

    getUserById(id: number): User{
        return this.users.find(u => u.id == id)
    }

    createUser(createUserDto: CreateUserDto): User{
        const { firstName, lastName} = createUserDto
        const newUser: User = {
            id: uuid(),
            firstName,
            lastName,
            dateCreated: new Date()
        }

        this.users.push(newUser)
        return newUser
    }

    updateUser(id: number, updateUsersDto: UpdateUserDto): User{
        const user = this.users.find(u => u.id == id)
        const {firstName, lastName} = updateUsersDto

        //update values if they are not null
        user.firstName = firstName ?? user.firstName
        user.lastName = lastName ?? user.lastName

        return user
    }

    deleteUser(id: number): void{
        this.users.filter(u => u.id != id)
    }
}
