import { TodayContainer, TodayTitle, HabitsContainer } from "./styled"
import React, { useContext, useState, useEffect } from "react"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import WeekDays from "./WeekDays"
import { HabitContext } from "../../context/HabitContext"

dayjs.locale("pt-br");
const date = dayjs()
const formattedDate = date.format('dddd, DD/MM')
const weekday = date.format('dddd')

export default function TodayPage() {

    const [done, setDone] = useState([])
    const [dayList, setDayList] = useState([])
    const [percentage, setPercentage] = useState(0)
    const { habitsObj } = useContext(HabitContext)

    useEffect(() => {
        const numerator = dayList.length
        const denominator = habitsObj.length
        setPercentage((numerator / denominator) * 100)
    }, [habitsObj, done])

    return (
        <TodayContainer>
            <TodayTitle>
                <h1>{formattedDate}</h1>
                {done.length !== 0 ? `Você concluiu ${percentage}%` : <h2>Nenhum hábito concluído ainda</h2>}

            </TodayTitle>
            <HabitsContainer>
                <WeekDays
                    habits={habitsObj}
                    weekday={weekday}
                    done={done}
                    setDone={setDone}
                    dayList={dayList}
                    setDayList={setDayList}
                />
            </HabitsContainer>
        </TodayContainer>
    )
}
