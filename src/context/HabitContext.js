import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const HabitContext = createContext();

export function HabitContextProvider({ children }) {
    const [habit, setHabit] = useState({ name: "", days: [] })
    const [habitsObj, setHabitsObj] = useState([])
    const [newHabit, setNewHabit] = useState({ name: "", days: [], id: "" })
    const { user } = useContext(UserContext)

    useEffect(() => {
        if (user.token !== undefined) {
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
            const token = user.token
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            const promise = axios.get(URL, config)
            promise.then(res => {
                setNewHabit({ ...habit, id: res.data.id })
                setHabitsObj(res.data)
            })
            promise.catch(err => console.log(err.response.data.message))
        }
    }, [user, habit])

    return (
        <HabitContext.Provider value={{ habit, setHabit, newHabit, setNewHabit, habitsObj, setHabitsObj }}>
            {children}
        </HabitContext.Provider>
    )
}