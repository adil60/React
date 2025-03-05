import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Dummy",
                location: "Dummy",
                login: "xyz",
                avatar_url: null
            },
            count: 0
        };

    }

    async componentDidMount() {
        const json = await fetch("https://api.github.com/users/adil60");
        const data = await json.json();
        this.setState({
            user: {
                name: data.name,
                location: data.location,
                login: data.login,
                avatar_url: data.avatar_url
            }
        })

        this.timer = setInterval(() => {
            console.log("Set Timeout");
        }, 3000)
    }

    componentDidUpdate() {
        console.log(this.state.count);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { name, location, login, avatar_url } = this.state.user;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="Image" width="200px" height="200px" />
                <h3>{name}</h3>
                <h4>{location}</h4>
                <h4>{login}</h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }} >Count ++</button>
            </div>
        )
    }
}

export default UserClass;