export function handleAddAppointment(event,date,time,appointments,setAppointments,setDate,setTime){
    event.preventDefault();
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