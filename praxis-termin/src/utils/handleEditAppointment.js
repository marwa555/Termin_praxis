export function handleEditAppointment(appointmentId,
    appointments,setAppointments,
    patientName,patientPhone)
    {
        if(!patientName.trim() || ! patientPhone.trim()){
            alert("Bitte geben Sie Ihren Name und Ihre Telefonnummer ein.");
            return ;
        }
        const updateAppountments = appointments.map((appointment)=>{
            if(appointment.id===appointmentId){ return{
                ...appointment,
                patientName :patientName,
                patientPhone : patientPhone
            };}
            return appointment ;

        }
            

        );
    setAppointments(updateAppountments);
}