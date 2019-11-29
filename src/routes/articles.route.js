import {Router} from 'express'
import {ArticlesService} from '../services'

const articleService = new ArticlesService()
const ArticlesRoute = Router()
    .post('/article', async (req, res) => {
        try {
            const {body} = req
            const article = await articleService.create(body)
            res.status(201).json(article)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })
    .get('/articles', async (req, res) => {
        try {
            const article = await articleService.findAll()
            res.json(article)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })
    .put('/article', async (req, res) => {
        try {
            const {body} = req
            const article = await articleService.updateArticles(body)
            res.json(article)
        } catch (error) {
            res.status(error.status).send(error.message);
        }
    })
    .get('/article/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?', async (req, res) => {
        try {
            const {id} = req.params
            const article = await articleService.findById(id)
            res.json(article)
        } catch (error) {
            res.status(error.status).send(error.message);
        }
    })
    .get('/article', async (req, res) => {
        try {
            const {titles} = req.body
            const article = await articleService.findArticleByTitle(titles)
            res.json(article)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })
    .delete('/article/:id', async (req, res) => {
        try {
            const {id} = req.params
            const article = await articleService.deleteArticleById(id)
            res.json(article)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })

export default ArticlesRoute
