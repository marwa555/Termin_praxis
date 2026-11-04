import { useState } from "react";
import { handleAddAppointment } from "../utils/appointmentHandlers";
import AvailableAppointments from "../components/AvailableAppointments";
import BookedAppointments from "../components/BookedAppointments";
function ReceptionPage({appointments,setAppointments}){
    const [date, setDate] = useState("");
    const [time,setTime]= useState("");
  
    return (
        <div className="reception-page">
            <header className="page-header">
             <h1> PraxisTermin</h1>
             <p>Willkommen bei unserer Online-Terminverwaltung</p>
            </header>
            <main>
                <h2>Mitarbeiterbereich</h2>
                <section>
                    <h3>Neue Termin erstellen</h3>
                    <form onSubmit={(event)=>handleAddAppointment(event,date,time,appointments,setAppointments,
                        setDate,setTime
                    )}>
                        <div> 
                            <label htmlFor="date">Datum</label>
                            <input type="date"  id="date" value={date} 
                            onChange={(event)=>setDate(event.target.value)} required />
                        
                        </div>
                        <div>
                            <label htmlFor="time">Uhrzeit</label>
                            <input type="time"  id="time" value={time}
                            onChange={(event)=>setTime(event.target.value)} required />
                        </div>
                        <button type="submit">Termin hinzufügen</button>
                    </form>
                </section>
                <AvailableAppointments appointments={appointments}
                 setAppointments={setAppointments} onEditAppointment={true}/>
                <BookedAppointments appointments={appointments}
                setAppointments={setAppointments}
                />
            </main>

        </div>
    );

}
export default ReceptionPage