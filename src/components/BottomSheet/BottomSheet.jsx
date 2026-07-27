import "./BottomSheet.css";
import { Search } from "lucide-react";

function BottomSheet({ onClick }) {

    return (

        <div className="map-bottom-sheet">

            <button
                className="btn-primary map-location-btn"
                onClick={onClick}
            >

                <Search size={22} />

                <span>

                    Where Are You?

                </span>

            </button>

        </div>

    );

}

export default BottomSheet;