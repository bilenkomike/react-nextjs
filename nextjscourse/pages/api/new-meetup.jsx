import {MongoClient} from 'mongodb';
import { useRouter } from 'next/router';

async function handler(req, res) { 
    const router  = useRouter();   
    if(req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.a2i0z.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close();

        res.status(201).json({ message: 'inserted' });
        router.replace('/');
    }
}

export default handler;
