import {EntitySchema} from 'typeorm'
import Articles from '../../models/articles.model'

const ArticleSchema = new EntitySchema({
    name: 'Articles',
    target: Articles,
    tableName: 'articles',
    columns: {
        id: {
            primary: true,
            type: 'uuid',
            generated: 'uuid',
        },
        titles: {
            type: 'varchar',
            nullable: false,
        },
        content: {
            type: 'text',
            nullable: false,
        },
        createdAt: {
            name: 'created_at',
            type: 'timestamp',
            nullable: false,
            default: () => 'CURRENT_TIMESTAMP',
        },
        updateAt: {
            name: 'update_at',
            type: 'timestamp',
            nullable: false,
            default: () => 'CURRENT_TIMESTAMP',
        }
    },
    relations: {
        user:{
            target:'User',
            type:'many-to-one',
            joinColumn:true,
            eager:false,
        },
        category:{
            target:'Category',
            type:'many-to-one',
            joinColumn:true,
            eager:false,
        }
    }
});

export default ArticleSchema;
