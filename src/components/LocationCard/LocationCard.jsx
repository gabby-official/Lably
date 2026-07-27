import "./LocationCard.css";
import { MapPin } from "lucide-react";

function LocationCard({ onClose }) {

    return (

        <div
            className="location-overlay"
            onClick={onClose}
        >

            <div
                className="location-permission-card"
                onClick={(e)=>e.stopPropagation()}
            >

                <div className="location-icon">

                    <MapPin size={34}/>

                </div>

                <h2 className="location-title">

                    Enable Your Location

                </h2>

                <p className="location-description">

                    Enable location services to find and
                    connect with local professionals faster.

                </p>

                <button className="btn-primary">

                    Use My Location

                </button>

                <button
                    className="location-skip-btn"
                    onClick={onClose}
                >

                    Skip For Now

                </button>

            </div>

        </div>

    );

}

export default LocationCard;