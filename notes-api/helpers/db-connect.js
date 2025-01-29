// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<db_getachew>:<db_zagkih-beHdic-wyrva8>@cluster0.pe44h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB successfully');
}).catch(e => {
    console.log('Error while attempting to connect to MongoDB');
    console.log(e);
})

// To preven deprecation warnings (from MongoDB Native Driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);