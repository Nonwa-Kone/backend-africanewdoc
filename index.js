require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const router = require('./src/routes/Order.Route')
const connectDB = require('./src/services/ServiceMongoDB')


//Initialisation du serveur

const app = express()

app.use(cors())
app.use(bodyparser.urlencoded({ extended: false}))
app.use(express.json({limit: "10mb"}))

app.use("/api/v1/", router)



app.listen(process.env.PORT, process.env.ADRESS,function(){
    connectDB().catch(err => console.log(err));
    console.log(`[SERVEUR] est démarrer est port ${process.env.PORT}`)
})
