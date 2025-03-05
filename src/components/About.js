import User from "./UserFunctionComponent";
import React from "react";

class About extends React.Component {

    render() {
        return (
            <div>
                <h1>About Us</h1>

                <User />
            </div>
        )
    }

}

export default About;