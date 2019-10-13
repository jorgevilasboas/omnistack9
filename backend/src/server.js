const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const password = 'cCpFV8rx3jFfHux';
const databasename = 'omni9'
const app = express();

    mongoose.connect(`mongodb://jorge:${password}@omni9-shard-00-00-8cn0q.mongodb.net:27017,omni9-shard-00-01-8cn0q.mongodb.net:27017,omni9-shard-00-02-8cn0q.mongodb.net:27017/${databasename}?ssl=true&replicaSet=Omni9-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })    


app.use(express.json());
app.use(routes);

app.listen(3333, () => {console.log('Listening on port 3333')});