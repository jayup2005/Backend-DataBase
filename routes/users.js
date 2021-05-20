import express from 'express';
import { getUser,addUser, getIndividualUser, updateUser, deleteUser} from '../controller/users.js'

const router = express.Router(); 

router.get('/', getUser);
router.post('/', addUser);
router.get('/:id',getIndividualUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser)

export default router;
