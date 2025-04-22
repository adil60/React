import { useState,useEffect } from "react";

const User = () => {
    const [user, setUser] = useState({});

    useEffect( ()=> {
        fetchData();
        return() => {
            console.log("Function Ended"); 
        }
    },[] );

    const fetchData = async() => {
        const json = await fetch("https://api.github.com/users/adil60");
        const data = await json.json();
        setUser(data);
    }


    const { name , location , login , avatar_url }= user;

    return (
        <div className="user-card">
            <img src={avatar_url} width="200px" height={"200px"} />
            <h3>{name}</h3>
            <h4>{location}</h4> 
            <h4>{login}</h4>
        </div>
    )
}

export default User;