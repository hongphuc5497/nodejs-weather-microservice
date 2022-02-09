const express = require('express');

const weatherApp = express();

const routes = require('./routes')

routes(weatherApp);

const PORT = 5000;

weatherApp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})