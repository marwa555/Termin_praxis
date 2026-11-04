function SearchAppointment({searchDate,setSearchDate}) {
    return(
        <section>
            <h3>Termin nach Datum suchen</h3>
            <div>
                <label htmlFor="searchDate">Datum auswählen:</label>
                <input type="date" id="searchDate" value={searchDate} onChange={(event)=>
                    setSearchDate(event.target.value)
                } />
                {/*<button type="button" onClick={()=>{
                  
                }

                }>Suchen</button>*/}
                <button type="button" onClick={()=>{
                    setSearchDate("");
                }}>Zurücksetzen</button>
            </div>
        </section>
    );
 
}
export default SearchAppointment