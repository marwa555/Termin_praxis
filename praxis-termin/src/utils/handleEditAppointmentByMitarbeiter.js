export function handleEditAppointmentByMitarbeiter(appointmentId,appointments,setAppointments,date,time)
{
if(!date.trim()||!time){alert("Bitte geben Sie Datum und Uhrzeit ein."); 
    return ;
}
const updatedAppountment = appointments.map((appointment)=>{
    if(appointment.id===appointmentId){
        return{
        ...appointment,
        date:date,
        time:time
    };
}
return appointment ;
 
});
setAppointments(updatedAppountment);
}