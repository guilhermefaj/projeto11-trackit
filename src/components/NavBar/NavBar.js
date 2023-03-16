import { NavContainer } from "./styled";
import React, { useContext } from "react"
import { UserContext } from "../../context/UserContext";

export default function NavBar() {
    const { user } = useContext(UserContext)
    console.log(user)
    return (
        <NavContainer>
            <h1>TrackIt</h1>
            <img src={user.image} alt="Profile" />
        </NavContainer>
    )
}