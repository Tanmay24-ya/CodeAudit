const app = require('./src/app')
require('dotenv').config()

app.listen(5000, () => console.log(`Server Started on http://localhost:5000`))