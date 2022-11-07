import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails()  {
    return <MeetupDetail 
    image={"https://picsum.photos/200/300"} 
    title="First meetup" 
    address="Some adderess 5, 122345 meetup!"
    description="Meetup description"
    />

}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {params: 
                {
                    meetupId: 'm2',
                }
            }
        ]
    }
}


export async function getStaticProps (context) {

    const meetupId = context.params.meetupId;


    


    return {
        props: {
            meetupData: {
                img: "https://picsum.photos/200/300",
                id: meetupId,
                title: "First meetup",
                address: "Some adderess 5, 122345 meetup!",
                description:"Meetup description"
            }
        }
    }
}

export default MeetupDetails;


//  id: 'm1',
// title: 'First Meetup',
// image: 'https://picsum.photos/200/300',
// addres: 'Some adderess 5, 122345 meetup!',
// description: 'The first meetup'