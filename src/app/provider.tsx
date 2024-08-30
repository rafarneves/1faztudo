"use client"
import { createContext, useState } from "react";

export const ContextValue = createContext();

export default function ContextProvider ({children}: {children: React.ReactNode})  {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [closeButton, setCloseButton] = useState(false);

    return (
        <ContextValue.Provider value={{mobileOpen, closeButton, setMobileOpen, setCloseButton}}>
            {children}
        </ContextValue.Provider>
    )
}

