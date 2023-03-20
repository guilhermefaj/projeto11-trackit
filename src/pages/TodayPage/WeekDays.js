import { HabitContainer, HabitTexts, StyledRecord, StyledSequence } from "./styled";
import React from "react";
import axios from "axios";

export default function WeekDays({ habit, token, setHabitId, todayHabits, setTodayHabits }) {

    function saveId(id) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${habit.done ? "uncheck" : "check"
            }`;
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const promise = axios.post(URL, {}, config);
        promise
            .then((res) => {
                const updatedHabits = todayHabits.map((h) => {
                    if (h.id === id) {
                        h.done = !habit.done;
                    }
                    return h;
                });
                setTodayHabits(updatedHabits);
            })
            .catch((err) => {
                console.log(err.response.data);
                alert(
                    `Erro ${habit.done ? "desmarcando" : "marcando"} o hábito. Por favor, tente novamente mais tarde.`
                );
            });

        setHabitId(id);
    }

    return (
        <HabitContainer key={habit.id} done={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence}>
            <HabitTexts>
                <h1>{habit.name}</h1>
                <p>Sequência atual:
                    <StyledSequence currentSequence={habit.currentSequence} highestSequence={habit.highestSequence}>
                        <StyledRecord>
                            {habit.currentSequence !== 0 ? (habit.currentSequence === 1 ? ` ${habit.currentSequence} dia` : ` ${habit.currentSequence} dias`) : " 0"}
                        </StyledRecord>
                    </StyledSequence>
                </p>
                <p>Seu recorde:
                    <StyledSequence currentSequence={habit.currentSequence} highestSequence={habit.highestSequence}>
                        <StyledRecord>
                            {habit.highestSequence !== 0 ? (habit.currentSequence === 1 ? ` ${habit.highestSequence} dia` : ` ${habit.highestSequence} dias`) : " 0"}
                        </StyledRecord>
                    </StyledSequence>
                </p>
            </HabitTexts>
            <ion-icon onClick={() => saveId(habit.id)} name="checkmark-outline"></ion-icon>
        </HabitContainer>
    );
}
