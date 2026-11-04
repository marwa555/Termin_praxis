export function filterAppointments(appointments,searchDate){
    return ( appointments.filter((appointment)=>{
        return appointment.booked === false && (searchDate===""||appointment.date===searchDate);


    }));

}