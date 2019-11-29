import {Router} from 'express';
import {CategoryService} from '../services';

const categoryService = new CategoryService();
const categoryRouter = Router()
    .get('/categories', async (req, res) => {
        try {
            const category = await categoryService.findAllCategory();
            await res.json(category);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    })
    .post('/category', async (req, res) => {
        try {
            let category = {...req.body};
            category = await categoryService.createCategory(category);
            await res.json(category);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    })
    .put('/category', async (req, res) => {
        try {
            let category = {...req.body};
            category = await categoryService.updateCategoryById(category);
            await res.json(category);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    })
    .get('/category', async (req, res) =>{
        try {
            let {search} = req.body;
            const category = await categoryService.findCategoryByNameCategory(search);
            if (category) await res.json(category);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    })
    .get('/category/:id?([0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12})', async (req, res) => {
        try {
            const {id} = req.params;
            const category = await categoryService.findOneById(id);
            if (category) await res.json(category);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    })
    .delete('/category/:id?([0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12})', async (req, res) => {
        try {
            const {id} = req.params;
            const category = await categoryService.deleteById(id);
            if (category) await res.json(category);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    })
;

export default categoryRouter;