import React from "react";

class TeamClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "userName",
                location: "userLoc",
                email: "userEmail",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/aanushkasharma");
        const json = await data.json();

        console.log(json);
        this.setState( {
            userInfo: json,
        });
    }

    render ()
    {
        const { name, location, email } = this.state.userInfo;
        debugger;
        return (
            <div className="team-card">
                <h3>Name: {name || "No name available"}</h3>
                <h3>Location: {location || "No location available"}</h3>
                <h3>Email: {email || "No email available"}</h3>
            </div>
        );
    }
}

export default TeamClass;