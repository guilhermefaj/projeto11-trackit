import { createContext, useState } from "react";
import React from "react";

export const HabitContext = createContext();

export function HabitContextProvider({ children }) {
    const [habit, setHabit] = useState({ name: "", days: [] })

    return (
        <HabitContext.Provider value={{ habit, setHabit }}>
            {children}
        </HabitContext.Provider>
    )
}