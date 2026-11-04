export function handleDeleteAppointment(appointmentId,appointments,setAppointments){
    const confiemDelete = window.confirm("Möchten Sie diesen Termin wirklich löchen ?");
    if(!confiemDelete) { return ;}
    const updatedAppointments = appointments.filter((appointment)=>
      appointment.id!==appointmentId 
    );
setAppointments(updatedAppointments);
}