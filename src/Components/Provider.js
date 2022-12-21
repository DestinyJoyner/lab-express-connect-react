import { createContext, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
// Context obj to consume data
export const ContextData = createContext()


function Provider({children}) {
    const API = process.env.REACT_APP_API_URL
    // declare state to hold unaltered dataArr from fetch
    const [logs, setLogs] = useState([])

    return (
        <div>
            <ContextData.Provider value={{
                API,
                logs,
                setLogs,
            }}>
                <Nav />
                <Footer />
                {children}
            </ContextData.Provider>
            
        </div>
    );
}

export default Provider;