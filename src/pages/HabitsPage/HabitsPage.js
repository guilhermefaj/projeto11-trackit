import { HabitsContainer, MyHabits, NoHabits } from "./styled"
import React, { useContext, useEffect, useState } from "react"
import CreateHabit from "../../components/CreateHabit/CreateHabit"
import HabitCard from "../../components/CreateHabit/HabitCard";
import { HabitContext } from "../../context/HabitContext";

export default function HabitsPage() {
    const [showText, setShowText] = useState(true)
    const [hide, setHide] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const { habitsObj, setHabitsObj } = useContext(HabitContext)

    function handleHabit() {
        setShowForm(true)
        setHide(false)
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
                <button data-test="habit-create-btn" onClick={handleHabit}>+</button>
            </MyHabits>
            {showForm ? <CreateHabit hide={hide} setHide={setHide} /> : ""}
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
        </HabitsContainer>
    );
}