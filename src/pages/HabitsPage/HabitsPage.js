import { HabitsContainer, MyHabits, NoHabits, CreateHabitContainer, InputHabitName, CancelButton, SaveButton, DaysButtons } from "./styled"
import React from "react"

export default function HabitsPage() {
    return (
        <HabitsContainer>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </MyHabits>
            <CreateHabitContainer>
                <InputHabitName placeholder="nome do hábito"></InputHabitName>
                <DaysButtons>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </DaysButtons>
                <div>
                    <CancelButton>Cancelar</CancelButton>
                    <SaveButton>Salvar</SaveButton>
                </div>
            </CreateHabitContainer>
            <NoHabits>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoHabits>
        </HabitsContainer>
    )
}