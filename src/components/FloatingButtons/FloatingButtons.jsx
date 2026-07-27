import "./FloatingButtons.css";
import { Icon } from "@iconify/react";
import TestTubeIcon from "../../icons/TestTubeIcon";

function FloatingButtons() {

    return (

        <>

            <button
                className="map-floating-btn map-back-btn"
                aria-label="Menu"
            >

                <Icon
                    icon="material-symbols:menu-rounded"
                    width="24"
                />

            </button>

            <button
                className="map-floating-btn map-logo-btn"
                aria-label="Lably"
            >

                <TestTubeIcon size={34} />

            </button>

        </>

    );

}

export default FloatingButtons;