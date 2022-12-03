import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {

    return (
        <div className="Welcome">
            <Link to="sklep" className="WelcomeOption link-light text-decoration-none">
                <h2 className="WelcomeTitle text-shadow">Sklep</h2>
                <h3 className="WelcomeSubtitle">Zobacz nasze produkty!</h3>
            </Link>
            <div className="WelcomeOption WelcomeOption-variant">
                <h2 className="WelcomeTitle">O nas</h2>
                <h3 className="WelcomeSubtitle">Dowiedz się kim jesteśmy!</h3>
            </div>
        </div>
    )

}
export default Welcome;