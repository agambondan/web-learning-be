import {getRepository} from 'typeorm'
import Articles from '../models/articles.model'

class Articles {
    articlesRepository() {
        return getRepository(Articles)
    }

    async create(articles) {
        return this.articlesRepository().save(articles);
    }

    async findAll() {
        return await this.articlesRepository().findAll()
    }

    async findArticlesById(id) {
        const article = await this.articlesRepository().findOne({where: {id}})
        if (!article) throw {message: "gak nemu", status: 403}
        return article
    }

    async updateArticles(article) {
        const articleToUpdate = await this.findArticlesById(article.id)
        this.articlesRepository().merge(articleToUpdate, article)
        return await this.articlesRepository().save(article)
    }

    async deleteArticleById(id) {
        const articleToDelete = await this.findArticlesById(id)
        return await this.articlesRepository().delete(articleToDelete)
    }

    async findArticleByTitle(title) {
        const articleTitle = await this.findArticlesById(title)
        return await this.articlesRepository().findOne(articleTitle)
    }
}

export default Articles
