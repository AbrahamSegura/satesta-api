import { model, Schema } from "mongoose";

const empresaSchema = new Schema({
    nombre: String,
    RIF: String,
    correo: String,
    passwordHash: String,
    lista_preguntas: [{
        type: Schema.Types.ObjectId,
        ref: Lista
    }]
})

empresaSchema.set('toJSON', {
    transform: (_doc, retObj) => {
        retObj.id = retObj._id
        delete retObj._id
        delete retObj._v
        delete passwordHash
    }
})

const Empresa = new model('Empresa', empresaSchema)