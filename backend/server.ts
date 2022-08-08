require('dotenv').config()

let express = require('express')
const app = express()
const db = require('./config/db')
let productRoutes = require('./routes/productRoutes')
let userRoutes = require('./routes/userRoutes')
let personRoutes = require('./routes/personRoutes')
let paymentRoutes = require('./routes/paymentRoutes')

const PORT = process.env.PORT || 8000

app.use(express.json())
db()

app.use('/api/', productRoutes)
app.use('/api/', userRoutes)
app.use('/api/', personRoutes)
app.use('/api/', paymentRoutes)

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))