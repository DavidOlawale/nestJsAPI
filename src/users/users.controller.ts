import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './createUser.dto';
import { UpdateUserDto } from './updateUser.dto';
import { User } from './User';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){
    }
    
    @Get()
    getAllUsers(){
        return this.userService.getAllUsers()
    }

    @Get(':id')
    getUserById(@Param('id') id): User{
        return this.userService.getUserById(id)
    }

    @Post()
    createUser(@Body() createuserDto: CreateUserDto): User{
        return this.userService.createUser(createuserDto)
    }

    @Patch(':id')
    updateUser(@Param('id') id, @Body() updateUserDto: UpdateUserDto): User{
        return this.userService.updateUser(id, updateUserDto)
    }

    @Delete(':id')
    deleteUser(@Param('id') id){
        this.userService.deleteUser(id)
    }
}
