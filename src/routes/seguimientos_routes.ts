// Rutas para el modelo Seguimientos
// imports
import {Router} from 'express';
import {getSeguimientosByName, deleteByID, deleteByNameAll, register} from '../controllers/seguimiento.controller';
// -------

const seguimiento_router = Router();

seguimiento_router.route('/seguimientos/:nombre')
    .get(getSeguimientosByName)

seguimiento_router.route('/seguimientos/delete/:id')
    .get(deleteByID)

seguimiento_router.route('/seguimientos/delete-all/')
    .post(deleteByNameAll)

seguimiento_router.route('/seguimientos/register')
    .post(register)

export default seguimiento_router;