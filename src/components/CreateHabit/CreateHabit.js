import React, { useEffect, useState } from "react"
import { CreateHabitContainer, InputHabitName, CancelButton, SaveButton } from "./styled"
import WeekButtons from "./WeekButtons"
import { useContext } from "react"
import { HabitContext } from "../../context/HabitContext"
import axios from "axios"
import { UserContext } from "../../context/UserContext"

export default function CreateHabit() {
    const [input, setInput] = useState("")
    const [daysList, setDaysList] = useState([])
    const { habit, setHabit, setNewHabit } = useContext(HabitContext)
    const { user } = useContext(UserContext)

    function CreateNewHabit(e) {
        e.preventDefault()

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const token = user.token
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const promise = axios.post(URL, habit, config)
        promise.then(res => {
            setNewHabit({ ...habit, id: res.data.id })
            setInput("");
            setDaysList([])
        })
        promise.catch(err => console.log(err.response.data.message))
    }

    useEffect(() => {
        const newHabitObj = { ...habit, name: input };
        setHabit(newHabitObj);
    }, [input])

    return (
        <CreateHabitContainer onSubmit={CreateNewHabit}>
            <InputHabitName
                placeholder="nome do hábito"
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <WeekButtons
                daysList={daysList}
                setDaysList={setDaysList}
            />
            <div>
                <CancelButton type="button">Cancelar</CancelButton>
                <SaveButton type="submit">Salvar</SaveButton>
            </div>
        </CreateHabitContainer>
    )
}