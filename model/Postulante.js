import { model, Schema } from "mongoose";

const postulanteSchema = new Schema({
    nombre: String,
    apellido: String,
    password: String,
    correo: String,
    DNI: Number,
    locacion: String
})

empresaSchema.set('toJSON', {
    transform: (_doc, retObj) => {
        retObj.id = retObj._id
        delete retObj._id
        delete retObj._v
        delete passwordHash
    }
})
const Postulante = new model('Postulante', postulanteSchema)