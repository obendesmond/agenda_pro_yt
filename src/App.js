import React from "react"
import Agenda from "./components/Agenda"
import AgendaForm from "./components/AgendaForm"

const App = () => {

    return (
        <div className="flex flex-col md:flex-row">
           <AgendaForm />
           <Agenda />
        </div>
    )
}

export default App