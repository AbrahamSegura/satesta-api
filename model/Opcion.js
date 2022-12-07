import { model, Schema } from "mongoose";

const opcionSchema = new Schema({
    contenido: String,
    es_correcto: Boolean
})

empresaSchema.set('toJSON', {
    transform: (_doc, retObj) => {
        retObj.id = retObj._id
        delete retObj._id
        delete retObj._v
    }
})

const Opcion = new model('Opcion', opcionSchema)