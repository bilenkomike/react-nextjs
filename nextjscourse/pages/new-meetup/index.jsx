
import NewMeetupForm from '../../components/meetups/NewMeetupForm';


function NewMeetup () {
    async function addNewMeetUpHandler (enteredMeetupData)  {
        const result = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        const data = await result.json();

        console.log(data);

    }

    return <NewMeetupForm onAddMeetup={addNewMeetUpHandler} />
}

export default NewMeetup;