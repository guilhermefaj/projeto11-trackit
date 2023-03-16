import { HabitContainer, HabitTexts } from "./styled";
import React, { useState, useEffect } from "react";

export default function WeekDays({ habits, weekday, done, setDone, dayList, setDayList }) {
    const [filteredHabits, setFilteredHabits] = useState([]);

    useEffect(() => {
        const filtered = habits.filter(habit => habit.days.includes(getDayOfWeek(weekday)));
        setFilteredHabits(filtered);
    }, [habits, weekday]);

    function getDayOfWeek(weekday) {
        switch (weekday) {
            case "domingo":
                return 0;
            case "segunda-feira":
                return 1;
            case "terça-feira":
                return 2;
            case "quarta-feira":
                return 3;
            case "quinta-feira":
                return 4;
            case "sexta-feira":
                return 5;
            case "sábado":
                return 6;
            default:
                return -1;
        }
    }

    function clickHabit(habit) {
        if (done.includes(habit.id)) {
            setDone(done.filter(id => id !== habit.id));
        } else {
            setDone(prevDone => [...prevDone, habit.id]);
        }
    }

    function renderHabits() {
        return filteredHabits.map(habit => {
            const filteredList = habits.filter(h => h.days.includes(getDayOfWeek(weekday)));
            setDayList(prevState => ({ ...prevState, [weekday]: filteredList.length }));
            return (
                <HabitContainer key={habit.id}>
                    <HabitTexts>
                        <h1>{habit.name}</h1>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitTexts>
                    <ion-icon onClick={() => clickHabit(habit)} name="checkmark-outline"></ion-icon>
                </HabitContainer>
            );
        });
    }

    return (
        <>
            {weekday && renderHabits()}
        </>
    );
}