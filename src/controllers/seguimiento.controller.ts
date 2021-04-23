// Controller para el seguimiento
// imports
import {Response, Request} from 'express';
import Seguimiento from '../models/Seguimiento';
// -------

export async function register(req: Request, res: Response): Promise<Response>{
    const {
        nombre,
        dni,
        date,
        telf,
        fiebre,
        persistente,
        dificultadRespiratoria,
        malestarGeneral
    } = req.body;

    const new_seguimiento = new Seguimiento({
        nombre: nombre,
        dni: dni,
        date: date,
        telf: telf,
        fiebre: fiebre,
        persistente: persistente,
        dificultadRespiratoria: dificultadRespiratoria,
        malestarGeneral: malestarGeneral
    });

    try{
        await new_seguimiento.save();
        return res.status(201).json(new_seguimiento.toJSON());

    } catch (err) {
        console.log(err);
        return res.status(500).json();
    }
}

export async function getSeguimientosByName(req: Request, res: Response) : Promise<Response>{
    const nombre = req.params.nombre;
    try{
        const seguimientos = await Seguimiento.find({"nombre": nombre});
        
        if (seguimientos.length != 0){
            return res.status(200).json(seguimientos);
        } else {
            return res.status(404).json();
        }

    } catch(err){
        console.log(err);
        return res.status(500).json();
    }
}

export async function deleteByID(req: Request, res: Response) : Promise<Response> {
    const id = req.params.id;
    
    try{
        console.log("Eliminando ...");
        const seguimiento = await Seguimiento.deleteOne({"_id": id});

        if(seguimiento){
            console.log("Eliminado ...");
            return res.status(200).json();
        } else {
            console.log("No encontrado ...");
            return res.status(404).json();
        }

    } catch(err) {
        console.log(err);
        return res.status(500).json();
    }
}

export async function deleteByNameAll(req: Request, res: Response): Promise<Response> {
    const {nombre} = req.body;
    
    try{
        const seguimientos = await Seguimiento.deleteMany({"nombre": nombre});

        if(seguimientos.deletedCount != 0){
            return res.status(200).json();
        } else {
            return res.status(404).json();
        }

    } catch(err) {
        console.log(err);
        return res.status(500).json();
    }
}