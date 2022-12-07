import { model, Schema } from "mongoose";

const respuestaSchema = new Schema({
    respuesta_1: String,
    respuesta_2: String,
    respuesta_3: String,
    respuesta_4: String,
    user_id: [{
        type: Schema.Types.ObjectId,
        ref: Postulante
    }]
})

empresaSchema.set('toJSON', {
    transform: (_doc, retObj) => {
        retObj.id = retObj._id
        delete retObj._id
        delete retObj._v
    }
})

const Respuesta = new model('Respuesta', respuestaSchema)