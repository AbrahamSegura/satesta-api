import { model, Schema } from "mongoose";

const preguntaSchema = new Schema({
    enunciado: String,
    opcion_1: [{
        type: Schema.Types.ObjectId,
        ref: Opcion
    }],
    opcion_2: [{
        type: Schema.Types.ObjectId,
        ref: Opcion
    }],
    opcion_3: [{
        type: Schema.Types.ObjectId,
        ref: Opcion
    }],
    opcion_4: [{
        type: Schema.Types.ObjectId,
        ref: Opcion
    }],
})

empresaSchema.set('toJSON', {
    transform: (_doc, retObj) => {
        retObj.id = retObj._id
        delete retObj._id
        delete retObj._v
    }
})

const Pregunta = new model('Pregunta', preguntaSchema)