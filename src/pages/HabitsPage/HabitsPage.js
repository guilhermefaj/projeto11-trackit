import { HabitsContainer, MyHabits, NoHabits } from "./styled"
import React, { useContext, useEffect, useState } from "react"
import CreateHabit from "../../components/CreateHabit/CreateHabit"
import HabitCard from "../../components/CreateHabit/HabitCard";
import { HabitContext } from "../../context/HabitContext";

export default function HabitsPage() {
    const [habitCount, setHabitCount] = useState(0);
    const [showText, setShowText] = useState(true)

    const { habitsObj, setHabitsObj } = useContext(HabitContext)

    function handleHabit() {
        setHabitCount(habitCount + 1)
    }

    const habits = []
    for (let i = 0; i < habitCount; i++) {
        habits.push(<CreateHabit key={i} />)
    }

    useEffect(() => {
        if (habitsObj.length > 0) {
            setShowText(false)
        }
    }, [habitsObj])

    return (
        <HabitsContainer>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <button onClick={handleHabit}>+</button>
            </MyHabits>
            {habits.length > 0 ? habits : ""}
            {habitsObj.length > 0 ? (
                habitsObj.map((habit) => <HabitCard
                    key={habit.id}
                    setHabitObj={setHabitsObj}
                    habitsObj={habitsObj}
                    habit={habit} />)
            ) : (
                <NoHabits>
                    {showText
                        ? ""
                        : "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
                </NoHabits>
            )}
            <CreateHabit />
        </HabitsContainer>
    );
}