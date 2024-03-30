import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://ECOSWIFT:ECOSWIFT@ecoswift.8hegwtb.mongodb.net/ECOSWIFT?retryWrites=true&w=majority&appName=ECOSWIFT')
    .then(() => {
        console.log('Connected to MongoDB');
    });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
 