export function handleBookAppointment(
    appointmentId,
    appointments,
    setAppointments,
    patientName,
    patientPhone,
    setErrorAppointmentId
) {
    console.log("Name:", patientName);
    console.log("Phone:", patientPhone);
   

    if (!patientName.trim() || !patientPhone.trim()) {
        setErrorAppointmentId(appointmentId);
        return;
    }
    setErrorAppointmentId(null);
    
    const updatedAppointments = appointments.map((appointment) => {
        if (appointment.id === appointmentId) {
            return {
                ...appointment,
                patientName: patientName,
                patientPhone: patientPhone,
                booked: true
            };
        }

        return appointment;
    });

    setAppointments(updatedAppointments);
}