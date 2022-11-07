import classes from './MeetupDetail.module.css';


function MeetupDetail (props) {

    return<section className={classes.detail}>
    <img src={props.image} alt="A First meetup" />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </section>
}

export default MeetupDetail;