import React, { useContext, useEffect } from "react"
import { HabitContext } from "../../context/HabitContext"
import { DaysButtons, Button } from "./styled"

export default function WeekButtons({ daysList, setDaysList }) {

    const { habit, setHabit } = useContext(HabitContext)

    const week = ["D", "S", "T", "Q", "Q", "S", "S"]

    function addDay(index) {
        if (daysList.includes(index)) {
            setDaysList(daysList.filter(i => i !== index))
        } else {
            setDaysList([...daysList, index])
        }
    }

    useEffect(() => {
        const newHabit = { ...habit, days: daysList };
        setHabit(newHabit);
    }, [daysList])

    return (
        <DaysButtons>
            {week.map((day, index) => (
                <Button
                    type="button"
                    key={index}
                    onClick={() => addDay(index)}
                    isActive={daysList.includes(index)}
                >{day}</Button>
            ))}
        </DaysButtons>
    )
}
