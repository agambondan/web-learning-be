import {Router} from 'express';
import {UserService} from '../services';

const userService = new UserService();
const UserRouter = Router()
    .get('/users', async (req, res) => {
        try {
            const users = await userService.findAll();
            await res.json(users);
        } catch (error) {
            res.status(error.status).send(error.message);
        }
    })
    .get('/user/:id', async (req, res) => {
        try {
            const {id} = req.params;
            const users = await userService.findById(id)
            await res.json(users);
        } catch (error) {
            res.status(error.status).send(error.message);
        }
    })
    .get('/user', async (req, res) => {
        try {
            const {search} = req.body;
            const user = await userService.findByUserNameOrEmailUsingLike(search);
            await res.json(user);
        } catch (error) {
            res.status(error.status).send(error.message);
        }
    })
    .post('/user', async (req, res)=>{
        try{
            let user = {...req.body};
            res.json(await userService.createUser(user));
        }catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    })
    .delete('/user', async (req, res) => {
        try {
            const {id} = req.params;
            await userService.deleteUserById(id);
            res.status(200).json({message: `User Id ${id} Has Been Deleted`})
        } catch (error) {
            res.status(error.status).send(error.message);
        }
    })
    .put('/user', async (req, res) => {
        try {
            let user = {...req.body};
            let dataUser = await userService.updateUser(user)
            await res.json(dataUser);
        } catch (error) {
            res.status(error.status).send(error.message);
        }
    })

export default UserRouter;
