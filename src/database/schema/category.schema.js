import Category from '../../models/category.model';
import {EntitySchema} from "typeorm";

const categorySchema = new EntitySchema({
    name: 'Category',
    target: Category,
    tableName: 'categories',
    columns: {
        id: {
            primary: true,
            type: 'uuid',
            generated: 'uuid',
        },
        category: {
            type: 'varchar',
            unique: true,
            nullable: true,
        },
    },
    relations: {
        articles: {
            target: 'Articles',
            type: 'one-to-many',
            inverseSide:'category',
            joinColumn: true,
            cascade:true,
            eager: true,
        }
    }
});

export default categorySchema;
