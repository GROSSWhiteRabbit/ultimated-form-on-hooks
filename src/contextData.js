import React, { createContext, useContext, useState} from "react";





const ContextData = createContext();

const ContextDataProvider = ({children, ...props})=> {

    const [data, setData] = useState({files:[]})

    const setObjData = (obj)=>{
        if(typeof(obj) === 'object'){
            setData((prevObj)=>({
                ...prevObj,
                ...obj,
    
            }))
        } else if(typeof(obj) === 'function'){
            setData((prevObj)=>({
                ...prevObj,
                ...obj(prevObj),
    
            }))
        }
        
    }

    return (
        <ContextData.Provider value={{data, setObjData}} {...props}>
            {children}
        </ContextData.Provider> 
    )
}

const useDataContext = () => useContext(ContextData)

export {ContextDataProvider, useDataContext}