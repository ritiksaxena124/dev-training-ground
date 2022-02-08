import React from "react";
import "../css/FirstLook.css";
import { Link } from "react-router-dom";
const FirstLook = () => {
    return (
        <>
            <div className="wrapper">
                <div className="box__container">
                    <div className="box">
                        <div className="content">
                            <h1>Dev Training Grounds</h1>
                            <p>Put your skills to the test and help build a project with the community. Devs can create a webpage or feature and create a corresponding route linking to it.</p>
                            <Link className="btn" to="/tutorial">Explore more Tutorials</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstLook;