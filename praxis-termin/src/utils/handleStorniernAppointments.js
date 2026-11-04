export function handleStorniernAppointments(appointmentId,appointments,setAppointment){
    const updatedAppointments=appointments.map((appointment)=>{
        if(appointment.id===appointmentId){
            return{
                ...appointment,
                booked:false,
                patientName:"",
                patientPhone:""
            };
        }
        return appointment ;
    });
 setAppointment(updatedAppointments);
}