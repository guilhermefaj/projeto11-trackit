import { FooterContainer } from "./styled";
import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Footer({ percentage }) {

    return (
        <FooterContainer data-test="menu">
            <Link data-test="habitp-link" to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Link data-test="today-link" to="/hoje">
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
            </Link>
            <Link to="/historico">
                <p>Histórico</p>
            </Link>
        </FooterContainer>
    )
}