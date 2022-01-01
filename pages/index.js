
import MeetupList from '../components/meetups/MeetupList'


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: "Saint Martin's Island",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Saint_Martin%27s_Island.jpg",
        address: "Cox's Bazar-Teknaf peninsula",
        description: "St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip."
    },
    {
        id: 'm2',
        title: "Sajek Valley",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Sajek_Valley_2.jpg",
        address: "Sajek union, Baghaichhari Upazila in Rangamati District",
        description: "Sajek Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 2,000 feet (610 m) above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati."
    },
    {
        id: 'm3',
        title: "Cox's Bazar",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Worlds_longest_beach_Cox%27s_Bazar_-_Bangladesh_by_Idolhunter_Lckuang.jpg",
        address: "Cox's Bazar",
        description: "Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach. It is located 150 km (93 mi) south of the city of Chittagong. Cox's Bazar is also known by the name Panowa."
    },
    {
        id: 'm4',
        title: "Jaflong",
        image: "https://porzoton.com/wp-content/uploads/2020/03/Iron-bridge-hanging-over-the-Piyain-river-in-Jaflong.-The-steep-hills-on-both-sides-have-risen-like-walls-768x432.jpg",
        address: " Division of Sylhet",
        description: "Jaflong is a hill station and tourist destination in the Division of Sylhet, Bangladesh. It is located in Gowainghat Upazila of Sylhet District and situated at the border between Bangladesh and the Indian state of Meghalaya, overshadowed by subtropical mountains and rainforests."
    }
]

const HomePage = (props) => {

   

    return (
            <MeetupList meetups={props.meetups} />
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     //fetch data from an API

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }

//     }
// }




export async function getStaticProps(){
    // fetch data from an API
    return{
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate:1
    }
}


export default HomePage
