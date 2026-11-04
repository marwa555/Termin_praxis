export function handleBookAppointment(
    appointmentId,
    appointments,
    setAppointments,
    patientName,
    patientPhone
) {
    console.log("Name:", patientName);
    console.log("Phone:", patientPhone);
   

    if (!patientName.trim() || !patientPhone.trim()) {
        alert("Bitte geben Sie Ihren Namen und Ihre Telefonnummer ein.");
        return;
    }
    
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