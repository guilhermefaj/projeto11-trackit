import React, { useContext } from "react";
import { CreatedHabits } from "./styled";
import { DaysButtons, Button } from "../CreateHabit/styled"
import axios from "axios";
import { UserContext } from "../../context/UserContext";

function HabitCard({ habit, setHabitObj, habitsObj }) {

    const week = ["D", "S", "T", "Q", "Q", "S", "S"]

    const { user } = useContext(UserContext)

    function deleteHabit(id) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

        const token = user.token
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        const promise = axios.delete(URL, config)
        promise.then(() => {
            setHabitObj(habitsObj.filter(habits => habits.id !== id))
        })
        promise.catch(err => alert(err.response.data.message))

    }

    return (
        <CreatedHabits>
            <div>
                <h2>{habit.name}</h2>
                <DaysButtons>
                    {week.map((day, index) => (
                        <Button
                            type="button"
                            key={index}
                            isActive={habit.days.includes(index)}
                        >{day}</Button>
                    ))}
                </DaysButtons>
            </div>
            <ion-icon onClick={() => deleteHabit(habit.id)} name="trash-outline"></ion-icon>
        </CreatedHabits>
    );
}

export default HabitCard;