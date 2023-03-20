import { TodayContainer, TodayTitle, HabitsContainer } from "./styled"
import React, { useContext, useState, useEffect } from "react"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import WeekDays from "./WeekDays"
import { UserContext } from "../../context/UserContext"
import axios from "axios"

dayjs.locale("pt-br");
const date = dayjs()
const formattedDate = date.format('dddd, DD/MM')

export default function TodayPage({ percentage, setPercentage }) {
    const [todayHabits, setTodayHabits] = useState([])
    const [habitId, setHabitId] = useState(undefined)
    const { user } = useContext(UserContext)

    useEffect(() => {
        if (user.token !== undefined) {
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
            const token = user.token
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            const promise = axios.get(URL, config)
            promise.then(res => {
                console.table("todayHabits", res.data)
                setTodayHabits(res.data)
            })
            promise.catch(err => alert(err.response.data.message))
        }
    }, [user, habitId])

    return (
        <TodayContainer>
            <TodayTitle>
                <h1>{formattedDate}</h1>
                {/* {done.length !== 0 ? `Você concluiu ${percentage}%` : <h2>Nenhum hábito concluído ainda</h2>} */}
            </TodayTitle>
            <HabitsContainer>
                {todayHabits.map(habit => (
                    <WeekDays
                        key={habit.id}
                        todayHabits={todayHabits}
                        habit={habit}
                        token={user.token}
                        habitId={habitId}
                        setHabitId={setHabitId}
                        setTodayHabits={setTodayHabits}
                    />
                ))}

            </HabitsContainer>
        </TodayContainer>
    )
}
