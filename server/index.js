const express = require('express');
const app = express();

const postRouter = require('./routes/Posts')
const cors = require('cors');

// middleware
// needed for HTTP request body parsing ..
app.use(express.json());
// Cors
app.use(cors());


const db = require('./models');

app.use(express.urlencoded());
// router
app.use("/posts",postRouter);




db.sequelize.sync().then(() => {
    app.listen(3001, () => {
       console.log('Server running on port 3001');
    });
});




