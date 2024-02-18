import react, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserConstext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Darshan");    

    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserConstext.Provider value={user}>
                <ComponentB user={user}/>
            </UserConstext.Provider>
        </div>
    )
}

export default ComponentA;