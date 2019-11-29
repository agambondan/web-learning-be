import User from '../../models/user.model';
import {EntitySchema} from "typeorm";

const UserSchema = new EntitySchema({
    name: 'User',
    target: User,
    tableName: 'users',
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: 'uuid',
        },
        userName:{
            type: 'varchar',
            unique: true,
            nullable: false,
        },
        password:{
            type: 'varchar',
            nullable: false,
        },
        fullName:{
            type: 'varchar',
            nullable: false,
        },
        email:{
            type: 'varchar',
            nullable: false,
            unique: true,
        },
        phoneNumber:{
            type: 'varchar',
            nullable: false,
            unique:true,
        },
    },
    relations:{
        articles:{
            target:'Articles',
            type:'one-to-many',
            inverseSide:'user',
            joinColumn: true,
            cascade:true,
            eager:true
        }
    }
});
export default UserSchema;
