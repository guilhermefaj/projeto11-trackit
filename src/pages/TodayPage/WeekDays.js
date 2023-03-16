import { HabitContainer, HabitTexts } from "./styled"
import React from "react"

export default function WeekDays({ habits, weekday }) {
    return (
        <>
            {weekday === "doming" && habits.filter(habit => habit.days.includes(0)).map((habit, i) => (
                <HabitContainer key={habits.id}>
                    <HabitTexts>
                        <h1>{habit.name}</h1>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitTexts>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </HabitContainer>
            ))}
            {weekday === "segunda-feira" && habits.filter(habit => habit.days.includes(1)).map((habit, i) => (
                <HabitContainer key={habits.id}>
                    <HabitTexts>
                        <h1>{habit.name}</h1>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitTexts>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </HabitContainer>
            ))}
            {weekday === "terça-feira" && habits.filter(habit => habit.days.includes(2)).map((habit, i) => (
                <HabitContainer key={habits.id}>
                    <HabitTexts>
                        <h1>{habit.name}</h1>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitTexts>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </HabitContainer>
            ))}
            {weekday === "quarta-feira" && habits.filter(habit => habit.days.includes(3)).map((habit, i) => (
                <HabitContainer key={habits.id}>
                    <HabitTexts>
                        <h1>{habit.name}</h1>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitTexts>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </HabitContainer>
            ))}
            {weekday === "quinta-feira" && habits.filter(habit => habit.days.includes(4)).map((habit, i) => (
                <HabitContainer key={habits.id}>
                    <HabitTexts>
                        <h1>{habit.name}</h1>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitTexts>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </HabitContainer>
            ))}
            {weekday === "sexta-feira" && habits.filter(habit => habit.days.includes(5)).map((habit, i) => (
                <HabitContainer key={habits.id}>
                    <HabitTexts>
                        <h1>{habit.name}</h1>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitTexts>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </HabitContainer>
            ))}
            {weekday === "sábado" && habits.filter(habit => habit.days.includes(6)).map((habit, i) => (
                <HabitContainer key={habits.id}>
                    <HabitTexts>
                        <h1>{habit.name}</h1>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitTexts>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </HabitContainer>
            ))}
        </>
    )
}