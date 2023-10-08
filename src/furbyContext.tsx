import {createContext, PropsWithChildren, useContext, useState} from "react";

interface IFurbyContext {
    showFurby: boolean;
    toggleFurby: (x: boolean) => void;
}

export const FurbyContext = createContext<IFurbyContext>({
    showFurby: false,
    toggleFurby: () => {}
})

export const useFurbyContex = () => useContext(FurbyContext)

export const FurbyProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [furby, setFurby] = useState(true);

    return <FurbyContext.Provider value={{showFurby: furby, toggleFurby: setFurby}}>
        {children}
    </FurbyContext.Provider>
}
