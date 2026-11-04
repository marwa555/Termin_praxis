import { useState } from "react";
import PatientForm from "../components/PatientForm";
import AvailableAppointments from "../components/AvailableAppointments";
import BookedAppointments from "../components/BookedAppointments";
import SearchAppointment from "../components/SearchAppointment";
import { handleBookAppointment } from "../utils/handleBookAppointment";
import { filterAppointments } from "../utils/filterAppointments";
//import { handleEditAppointment } from "../utils/handleEditAppointment";
function PatientPage({appointments,setAppointments}){
    const[patientName,setPatientName]=useState("");
    const[patientPhone,setPatientPhone]=useState("");
    const [searchDate,setSearchDate]=useState("");
    const filteredAppointments=filterAppointments(appointments,searchDate);

    return (
        <div className="patient-page">
            <header className="page-header">
             <h1> PraxisTermin</h1>
             <p>Willkommen bei unserer Online-Terminverwaltung</p>
             </header>
             <main>
             <PatientForm
             patientName={patientName}
             setPatientName={setPatientName}
             patientPhone={patientPhone}
             setPatientPhone={setPatientPhone}
             />
             <SearchAppointment searchDate ={searchDate} setSearchDate={setSearchDate}/>
            <AvailableAppointments
             appointments={filteredAppointments}
             onBookAppointment={(appointmentId) => {
       
               handleBookAppointment(
                appointmentId,
               appointments,
               setAppointments,
               patientName,
               patientPhone
                                );
                                        }}
               />

               <h2>Meine Buchung</h2>
               <BookedAppointments  appointments={appointments} setAppointments={setAppointments}
               onEditAppointment={true}
               />
             </main>
        </div>
    );

}
export default PatientPage