import { Router } from 'express';
import { criarUsuario } from '../controllers/usuarios.controller';

const router = Router();

router.post('/usuarios', criarUsuario);

export default router;
