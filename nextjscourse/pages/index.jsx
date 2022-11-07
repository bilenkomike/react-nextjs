import MeetUpList from '../components/meetups/MeetupList';
import {MongoClient} from 'mongodb';





function HomePage(props) {

    return <MeetUpList meetups={props.meetups} />
}


export async function getStaticProps() {
    // fetch data from api
    const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.a2i0z.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    
    const meetups = await meetupsCollection.find().toArray();
    
    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => 
                ({
                    title: meetup.title, 
                    address: meetup.address,
                    image: meetup.image, 
                    id: meetup._id.toString(),

                })

            ) ,
        },
        revalidate: 1
    }
}

// export async function getServerSideProps(context) {

//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         }
//     }
// }


export default HomePage;