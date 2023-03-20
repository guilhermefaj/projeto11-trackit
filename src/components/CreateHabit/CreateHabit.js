import React, { useEffect, useState } from "react"
import { CreateHabitContainer, InputHabitName, CancelButton, SaveButton } from "./styled"
import WeekButtons from "./WeekButtons"
import { useContext } from "react"
import { HabitContext } from "../../context/HabitContext"
import axios from "axios"
import { UserContext } from "../../context/UserContext"

export default function CreateHabit({ hide, setHide }) {
    const [input, setInput] = useState("")
    const [daysList, setDaysList] = useState([])
    const [load, setLoad] = useState(false)

    const { habit, setHabit, setNewHabit } = useContext(HabitContext)
    const { user } = useContext(UserContext)

    function CreateNewHabit(e) {
        e.preventDefault()
        setLoad(true)

        if (daysList.length === 0) {
            alert("Você precisa selecionar pelo menos um dia")
            setLoad(false)
            return
        }

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
            setLoad(false)
            setHide(true)
        })
        promise.catch(err => {
            alert(err.response.data.message)
            setLoad(false)
        })
    }

    function hideForm() {
        setHide(true)
    }

    useEffect(() => {
        const newHabitObj = { ...habit, name: input };
        setHabit(newHabitObj);
    }, [input])

    return (
        <>
            {hide ? "" : (<CreateHabitContainer data-test="habit-create-container" CreateHabitContainer onSubmit={CreateNewHabit} >
                <InputHabitName
                    data-test="habit-name-input"
                    disabled={load}
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
                    <CancelButton
                        data-test="habit-create-cancel-btn"
                        disabled={load}
                        type="button"
                        onClick={hideForm}
                    >Cancelar</CancelButton>
                    <SaveButton
                        data-test="habit-create-save-btn"
                        disabled={load}
                        type="submit"
                    >Salvar</SaveButton>
                </div>
            </CreateHabitContainer >)}
        </>
    )
}