import React, {useState} from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="user-card">
                <h2>Developed By: {this.props.name}</h2>
                <h2>Location: India</h2>
            </div>
        );
    }
}

export default UserClass;
