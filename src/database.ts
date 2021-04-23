// database
import mongoose from 'mongoose';

export async function startConnection() {
    // CONNECT TO MONGODG (mongodb://localhost:27017/{database})
    const urlMongo = 'mongodb://127.0.0.1:27017/farmacovigilancia';

    const db = await mongoose.connect(urlMongo,{ 
        useNewUrlParser: true,
        useFindAndModify: false
    });

    console.log(`[ DATABASE RUNNING ] started database @ ${urlMongo}`);
}