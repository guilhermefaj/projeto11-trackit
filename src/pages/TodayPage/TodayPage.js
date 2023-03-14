import { TodayContainer, TodayTitle, HabitsContainer, HabitContainer, HabitTexts } from "./styled"

export default function TodayPage() {
    return (
        <TodayContainer>
            <TodayTitle>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </TodayTitle>
            <HabitsContainer>
                <HabitContainer>
                    <HabitTexts>
                        <h1>Ler 1 capítulo de livro</h1>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitTexts>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </HabitContainer>
                <HabitContainer>
                    <HabitTexts>
                        <h1>Ler 1 capítulo de livro</h1>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitTexts>

                    <ion-icon name="checkmark-outline"></ion-icon>
                </HabitContainer>
            </HabitsContainer>
        </TodayContainer>
    )
}
