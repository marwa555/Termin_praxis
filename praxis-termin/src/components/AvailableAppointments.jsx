import { handleEditAppointmentByMitarbeiter } from "../utils/handleEditAppointmentByMitarbeiter";
import { handleDeleteAppointment } from "../utils/handleDeleteAppointment";
import { useState } from "react";
function AvailableAppointments({appointments,setAppointments,onBookAppointment,onEditAppointment}){
    const [editingAppointmentId,setEditingAppointment]=useState(null);
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    function startEditing(appointment){
        setEditingAppointment(appointment.id);
        setDate(appointment.date);
        setTime(appointment.time);
    }
    const availableAppointments = appointments.filter(
        (appointment)=>appointment.booked===false
    );
    return(
        <section>
            <h3>
                Verfügbaren Termine
            </h3>
            {availableAppointments.map((appointment) =>
    <article key={appointment.id}>

        {editingAppointmentId === appointment.id ? (
            <div>
                <label>Datum:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />

                <label>Uhrzeit:</label>
                <input
                    type="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                />

                <button
                    type="button"
                    onClick={() => {
                        handleEditAppointmentByMitarbeiter(
                            appointment.id,
                            appointments,
                            setAppointments,
                            date,
                            time
                        );
                        setEditingAppointment(null);
                    }}
                >
                    Speichern
                </button>

                <button
                    type="button"
                    onClick={() => setEditingAppointment(null)}
                >
                    Abbrechen
                </button>
            </div>
        ) : (
            <div>
                <p>Datum: {appointment.date}</p>
                <p>Uhrzeit: {appointment.time}</p>

                {onBookAppointment && (
                    <button
                        type="button"
                        onClick={() => onBookAppointment(appointment.id)}
                    >
                        Termin buchen
                    </button>
                )}

                {onEditAppointment && (
                    <button
                        type="button"
                        onClick={() => startEditing(appointment)}
                    >
                        Termin bearbeiten
                    </button>
                    
                )}
                 {onEditAppointment && (
                    <button
                        type="button"
                        onClick={() => handleDeleteAppointment( appointment.id,appointments,setAppointments)}
                    >
                        Termin Löchen
                    </button>
                    
                )}
            </div>
        )}

    </article>
)
            }
        </section>
    );

}
export default AvailableAppointments ;