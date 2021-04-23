// Modelo de Seguimiento:
/**
 * nombre --> String,
 * dni --> String,
 * date --> DATE,
 * telf --> [String,]
 * Fiebre --> si/no Boolean(?)
 * Persistente --> si/no
 * Dificultad pra respirar
 * Malestar General
 */

// imports
import {model, Document, Schema} from 'mongoose';
// -------

const schema = new Schema({
    nombre: String,
    dni: String,
    date: Date,
    telf: [{
        lugar: String,
        numero: String
    }],
    fiebre: Boolean,
    persistente: Boolean,
    dificultadRespiratoria: Boolean,
    malestarGeneral: Boolean
});

interface ISeguimiento extends Document{
    nombre: String;
    dni: String;
    date: Date;
    telf: [{
        lugar: String,
        numero: String
    }];
    fiebre: Boolean;
    persistente: Boolean;
    dificultadRespiratoria: Boolean;
    malestarGeneral: Boolean;
}

export default model<ISeguimiento>('Seguimiento', schema);