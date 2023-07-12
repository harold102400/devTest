const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

const DataModel = require('./models/CurrencyInfo');
const { DB_CONNECTION_STRING} = require('./config');

const connectToDatabase = async () => {
    try {
      await mongoose.connect(DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conexión exitosa a la base de datos');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
      throw error;
    }
  };
  
  connectToDatabase()
    .then(() => {
      const port = 3001;
      app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
      });
    })
    .catch((error) => {
      console.error('Error al conectar a la base de datos:', error);
      process.exit(1);
    });
  
    app.get('/getAllData', async (req, res) => {
      try {
        console.log('Obteniendo datos...');
        const allData = await DataModel.find();
        console.log('Datos obtenidos:', allData);
        res.json(allData);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        res.status(500).json({ error: 'Error al obtener los datos' });
      }
    });
    