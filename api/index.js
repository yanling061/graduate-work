const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DBConnection successful!'))
	.catch(err => console.log(err));

require('./routes/auth')(app);
require('./routes/category')(app);
require('./routes/product')(app);

app.listen(5000, async () => {
	console.log(`http://localhost:5000`);
});
