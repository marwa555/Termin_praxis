export function handleAddAppointment(event,date,time,appointments,setAppointments,setDate,setTime,setErrorMessage){
    event.preventDefault();
    const appointmentExists = appointments.some((appointment)=>{
        return appointment.date ===date && appointment.time === time;
    });
    if(appointmentExists){
        setErrorMessage("Für diesen Zeitpunkt existiert bereits ein Termin.");
        return ;
    }
    setErrorMessage("");
    const newAppointment = {
        id:Date.now() ,
        date : date,
        time : time,
        patientName :"",
        patientPhone :"",
        booked : false 
    };
    setAppointments([...appointments,newAppointment]);
    setDate("");
    setTime("");
}