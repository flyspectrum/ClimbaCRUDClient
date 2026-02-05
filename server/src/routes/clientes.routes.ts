import { Router } from 'express';
import { criarCliente } from '../controllers/clientes.controller';

const router = Router();

router.post('/clientes', criarCliente);

export default router;
