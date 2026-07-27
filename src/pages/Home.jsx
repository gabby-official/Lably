import { useState } from "react";

import "./Home.css";

import Map from "../components/Map/Map";
import FloatingButtons from "../components/FloatingButtons/FloatingButtons";
import BottomSheet from "../components/BottomSheet/BottomSheet";
import LocationCard from "../components/LocationCard/LocationCard";



function Home(){

    const [showLocationCard,setShowLocationCard] = useState(false);


    return(

        <div className="home">

            <Map/>

            <FloatingButtons/>


            {
                showLocationCard ?

                <LocationCard 
                    onClose={()=>
                        setShowLocationCard(false)
                    }
                />

                :

                <BottomSheet
                    onClick={()=>
                        setShowLocationCard(true)
                    }
                />

            }


        </div>

    )

}


export default Home;