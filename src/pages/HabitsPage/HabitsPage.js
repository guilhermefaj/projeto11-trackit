import { HabitsContainer, MyHabits, NoHabits } from "./styled"
import React, { useState } from "react"
import CreateHabit from "../../components/CreateHabit/CreateHabit"

export default function HabitsPage() {

    return (
        <HabitsContainer>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </MyHabits>
            <CreateHabit />
            <NoHabits>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoHabits>
        </HabitsContainer>
    )
}