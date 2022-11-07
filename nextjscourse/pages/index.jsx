import MeetUpList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://picsum.photos/200/300',
        addres: 'Some adderess 5, 122345 meetup!',
        description: 'The first meetup'
    },
    {
        id: 'm2',
        title: 'Second Meetup',
        image: 'https://picsum.photos/200/300',
        addres: 'Some adderess 10, 122345 meetup!',
        description: 'The second meetup'
    },
];

function HomePage(props) {

    return <MeetUpList meetups={props.meetups} />
}


export async function getStaticProps() {
    // fetch data from api
    
    return {
        props: {
            meetups: DUMMY_MEETUPS,
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