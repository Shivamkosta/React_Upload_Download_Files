const express = require('express');
const cors = require('cors');
const fileRoute = require('./routes/file');
require('./db/db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(fileRoute);

const port = process.env.PORT || 3040;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
