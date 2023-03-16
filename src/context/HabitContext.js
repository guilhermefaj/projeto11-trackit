import { createContext, useState } from "react";
import React from "react";

export const HabitContext = createContext();

export function HabitContextProvider({ children }) {
    const [habit, setHabit] = useState({ name: "", days: [] })
    const [newHabit, setNewHabit] = useState({ name: "", days: [], id: "" })
    return (
        <HabitContext.Provider value={{ habit, setHabit, newHabit, setNewHabit }}>
            {children}
        </HabitContext.Provider>
    )
}