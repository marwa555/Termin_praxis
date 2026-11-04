import { handleDeleteAppointment } from "../utils/handleDeleteAppointment";
import { useState } from "react";
import { handleEditAppointment } from "../utils/handleEditAppointment";
function BookedAppointments({appointments,setAppointments,onEditAppointment}){
    const [editingAppointmentId, setEditingAppointmentId]=useState(null);
    const [patientName,setPatientName]=useState("");
    const [patientPhone,setPatientPhone]=useState("");
    function startEditing(appointment){
        setEditingAppointmentId(appointment.id);
        setPatientName(appointment.patientName);
        setPatientPhone(appointment.patientPhone);
    }
    function saveChanges(appointmentId){
        handleEditAppointment(appointmentId,appointments,setAppointments,patientName,patientPhone);
        setEditingAppointmentId(null);
    }
    const availableAppointments = appointments.filter(
        (appointment)=>appointment.booked===true
    );
    return(
        <section>
            <h3>
                Gebuchte Termine
            </h3>
            {availableAppointments.map((appointment) =>
    <article key={appointment.id}>

        {editingAppointmentId === appointment.id ? (
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={patientName}
                    onChange={(event) =>
                        setPatientName(event.target.value)
                    }
                />

                <label>Telefonnummer:</label>
                <input
                    type="text"
                    value={patientPhone}
                    onChange={(event) =>
                        setPatientPhone(event.target.value)
                    }
                />

                <button
                    type="button"
                    onClick={() => saveChanges(appointment.id)}
                >
                    Speichern
                </button>

                <button
                    type="button"
                    onClick={() => setEditingAppointmentId(null)}
                >
                    Abbrechen
                </button>
            </div>
        ) : (
            <div>
                <p>Datum: {appointment.date}</p>
                <p>Uhrzeit: {appointment.time}</p>
                <p>Name: {appointment.patientName}</p>
                <p>Telefonnummer: {appointment.patientPhone}</p>

                <button
                    type="button"
                    onClick={() =>
                        handleDeleteAppointment(
                            appointment.id,
                            appointments,
                            setAppointments
                        )
                    }
                >
                    Termin löschen
                </button>

                {onEditAppointment && (
                    <button
                        type="button"
                        onClick={() => startEditing(appointment)}
                    >
                        Termin bearbeiten
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
export default BookedAppointments ;