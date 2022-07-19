const express = require('express');
const cors = require('cors');
const route = require('./src/routes/route');
const connectToDatabase = require('./src/database/db');

const userRoute = require('./src/users/users.route');
const authRoute = require('./src/auth/auth.route');
const swaggerRoute = require('./src/swagger/swagger.route')


const port = 3002;

const app = express();
connectToDatabase();


app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerRoute)
app.use('/characters', route);
app.use('/users', userRoute);
app.use('/auth', authRoute);



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
