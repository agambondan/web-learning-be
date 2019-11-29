import {getRepository, Like} from "typeorm";
import User from '../models/user.model';

class UserService {
    userRepository() {
        return getRepository(User);
    }

    async findAll() {
        return await this.userRepository().find();
    }

    async findById(idUser) {
        let dataUser = await this.userRepository().findOne(idUser);
        if (!dataUser) throw {message: `User with id ${idUser} not found`, status: 403}
        return dataUser;
    }

    async findByUserNameOrEmailUsingLike(search) {
        let dataUser = await this.userRepository().find({userName: Like(`%${search}%` || this.findBYEmail(search))});
        if (dataUser == null) throw {message: `User with username ${search} not found`}
        return dataUser;
    }

    async findByUserName(userName) {
        let dataUser = await this.userRepository().findOne(userName);
        if (!dataUser) throw {message: `User with username ${userName} not found`};
        return dataUser;
    }

    async findBYEmail(email) {
        let dataUser = await this.userRepository().find({email: Like(`%${email}%`)});
        if (!dataUser) throw {message: `User with email ${email} not found`};
        return dataUser;
    }

    async createUser(user) {
        return this.userRepository().save(user);
    }

    async deleteUserById(idUser) {
        let dataUser = await this.findById(idUser);
        if (dataUser) throw {message: `Can't delete user with this id ${idUser} because not found`};
        return this.userRepository().delete(idUser);
    }

    async updateUser(user) {
        this.findById(user.idUser);
        return this.userRepository().save(user);
    }
}

export default UserService;
