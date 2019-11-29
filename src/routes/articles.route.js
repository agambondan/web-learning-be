import {Router} from 'express'
import {Articles} from '../services'

const articleService = new Articles()
const UserRoute = Router()
    .post('/article', async (req, res) => {
        try {
            const {body} = req
            const user = await articleService.create(body)
            res.status(201).json(user)
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
    .put('/articles', async (req, res) => {
        try {
            const {body} = req
            const article = await articleService.updateArticles(body)
            res.json(article)
        } catch (error) {
            res.status(error.status).send(error.message);
        }
    })
    //get user by Id
    .get('/article/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?', async (req, res) => {
        try {
            const {id} = req.params
            const article = await articleService.findById(id)
            res.json(article)
        } catch (error) {
            res.status(error.status).send(error.message);
        }
    })
    //get user by fullname
    .get('/article/:title?', async (req, res) => {
        try {
            const {title} = req.params
            const article = await articleService.findArticleByTitle(title)
            res.json(article)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })
    //delete user by Id
    .delete('/article/:id', async (req, res) => {
        try {
            const {id} = req.params
            const article = await articleService.deleteArticleById(id)
            res.json(article)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })

export default UserRoute
