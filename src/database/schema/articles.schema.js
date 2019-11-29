import {
    EntitySchema
} from 'typeorm'
import Articles from '../../models/articles.model'

const Articles = new EntitySchema({
    name: 'Articles',
    target: Articles,
    tableName: 'mst_articles',
    columns: {
        id: {
            primary: true,
            type: 'uuid',
            generated: 'uuid',
        },
        id_category: {
            type: 'uuid',
            nullable: true,
        },
        titles: {
            type: 'varchar',
            nullable: false,
        },
        contnets: {
            type: 'text',
            nullable: false,
        },
        createdAt: {
            name: 'created_at',
            type: 'date',
            nullable: false,
            default: () => 'CURRENT_TIMESTAMP',
        },
        updateAt: {
            name: 'update_at',
            type: 'date',
            nullable: false,
            default: () => 'CURRENT_TIMESTAMP',
        },
        createdBy: {
            name: 'created_by',
            type: 'uuid',
            nullable: true,
        }
    },
    relations: {

    }
})