import { createContext } from "react";
export const AppContext=createContext();
const ContextProvider=(props)=>{
    const phone="+9196967840"
    return(
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider;