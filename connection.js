import mongoose from "mongoose";

const password = process.env.API_PASSWORD
const CONNECTION_TRING = `mongodb+srv://abraham_admin_1:${password}@satestadb.rrnxmw7.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(CONNECTION_TRING).then(() => {
    console.log('its connect')
}).catch(err => {
    console.error(err)
})
































// const opcion = new Opcion({
//     contenido: 'push',
//     es_correcto: true
// })
// opcion.save().then(res => {
//     console.log(res)
//     connection.close()
// }).catch(err => console.error(err))
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }