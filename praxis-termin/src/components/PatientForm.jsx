function PatientForm({patientName,setPatientName,patientPhone,setPatientPhone}){


  return(
    <section className="patient-form-section">
        <h2>Mein Daten</h2>
        <p>Bitte Geben Sie Ihre persönlichen Daten ein , um einen Termin zu buchen</p>
        <form>
            <div className="form-group">
                <label htmlFor="patientName">Vor-und Nachname </label>
                <input type="text" id="patientName" name="patientName" 
                placeholder="Vor- und Nachname eingeben"
                value={patientName} onChange={(event)=>setPatientName(event.target.value)}
                required />

            </div>
            <div className="form-group">
                <label htmlFor="patientPhone">Telefonnummer</label>
                <input type="tel" id="patientPhone" placeholder="Telefonnummer eingeben" 
                value={patientPhone} onChange={(event)=>setPatientPhone(event.target.value)}
                required />
            </div>
        </form>

    </section>
 );
}
export default PatientForm ;