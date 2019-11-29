import {getRepository, Like} from "typeorm";
import Category from '../models/category.model';

class CategoryService {
    CategoryRepository() {
        return getRepository(Category);
    }

    async findAllCategory() {
        return await this.CategoryRepository().find();
    }

    async createCategory(Category) {
        return await this.CategoryRepository().save(Category);
    }

    async findOneById(id) {
        let Category = await this.CategoryRepository().findOne({where: {id}});
        if (!Category) throw ({message: "ID NOT FOUND", status: 404});
        return Category;
    }

    async deleteById(id) {
        await this.findOneById(id);
        return await this.CategoryRepository().delete(id)
    }

    async findCategoryByNameCategory(search) {
        let Category = await this.CategoryRepository().find({category: Like (`%${search}%`)});
        if(!Category) throw ({message: `Name ${name} Not Found`, status: 404});
        return Category;
    }

    async updateCategoryById(Category) {
        let updateCategory = this.findOneById(Category.id);
        this.CategoryRepository().merge(updateCategory, Category);
        return await this.CategoryRepository().save(updateCategory);
    }
}

export default CategoryService;