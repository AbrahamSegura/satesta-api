import { model, Schema } from "mongoose";

const listaSchema = new Schema({
    pregunta_1: [{
        type: Schema.Types.ObjectId,
        ref: Pregunta
    }],
    pregunta_2: [{
        type: Schema.Types.ObjectId,
        ref: Pregunta
    }],
    pregunta_3: [{
        type: Schema.Types.ObjectId,
        ref: Pregunta
    }],
    pregunta_4: [{
        type: Schema.Types.ObjectId,
        ref: Pregunta
    }],
    pregunta_5: [{
        type: Schema.Types.ObjectId,
        ref: Pregunta
    }],
    user_id: String[{
        type: Schema.Types.ObjectId,
        ref: Empresa
    }]
})

empresaSchema.set('toJSON', {
    transform: (_doc, retObj) => {
        retObj.id = retObj._id
        delete retObj._id
        delete retObj._v
    }
})

const Lista = new model('Lista', listaSchema)