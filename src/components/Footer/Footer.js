import { FooterContainer } from "./styled";
import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {

    const percentage = 66;

    return (
        <FooterContainer>
            <p>Hábitos</p>
            <div>
                <CircularProgressbar
                    value={percentage}
                    text="Hoje"
                    styles={buildStyles({
                        pathColor: "white",
                        trailColor: "none",
                        textColor: "white",
                        textSize: "23px"
                    })}
                />
            </div>
            <p>Histórico</p>
        </FooterContainer>
    )
}