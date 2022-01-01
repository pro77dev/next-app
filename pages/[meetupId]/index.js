import MeetupDetail from "../../components/meetups/MeetupDetail";



const MeetupDetails = (props) => {

    return (
            <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} />
        

    )
}


export async function getStaticPaths() {
    return {
        fallback:true,
        paths: [
            { params: {
                meetupId: 'm1'
            }},
            { params: {
                meetupId: 'm2'
            }},
        ]
    }
}


export async function getStaticProps(context) {
    // fetch data from a single meetup

    const meetupId = context.params.meetupId;
    return{
        props:{
            meetupData:{
                image:"https://upload.wikimedia.org/wikipedia/commons/c/c4/Saint_Martin%27s_Island.jpg",
                title:"A First Meetup",
                address:"Bangladesh",
                description:"The meetup description",
                id: meetupId
            }
        }
    }
}


export default MeetupDetails;
