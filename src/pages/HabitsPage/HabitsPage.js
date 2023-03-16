import { HabitsContainer, MyHabits, NoHabits } from "./styled"
import React, { useState } from "react"
import CreateHabit from "../../components/CreateHabit/CreateHabit"

export default function HabitsPage() {
    const [habitCount, setHabitCount] = useState(0);

    function handleHabit() {
        setHabitCount(habitCount + 1)
    }

    const habits = []
    for (let i = 0; i < habitCount; i++) {
        habits.push(<CreateHabit key={i} />)
    }

    return (
        <HabitsContainer>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <button onClick={handleHabit}>+</button>
            </MyHabits>
            {habits.length > 0 ? habits : ""}
            <NoHabits>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoHabits>
        </HabitsContainer>
    )
}