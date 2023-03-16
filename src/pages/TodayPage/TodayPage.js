import { TodayContainer, TodayTitle, HabitsContainer } from "./styled"
import React, { useContext, useState, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import axios from "axios"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import WeekDays from "./WeekDays"

dayjs.locale("pt-br");
const date = dayjs()
const formattedDate = date.format('dddd, DD/MM')
const weekday = date.format('dddd')

export default function TodayPage() {
    const [habits, setHabits] = useState([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        if (user !== undefined) {
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
            const token = user.token
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            const promise = axios.get(URL, config)
            promise.then(res => {
                setHabits(res.data)
            })
            promise.catch(err => console.log(err.response.data.message))
        }
    }, [user])

    return (
        <TodayContainer>
            <TodayTitle>
                <h1>{formattedDate}</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </TodayTitle>
            <HabitsContainer>
                <WeekDays habits={habits} weekday={weekday} />
            </HabitsContainer>
        </TodayContainer>
    )
}
