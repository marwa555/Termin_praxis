import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PatientPage from "./pages/PatientPage";
import ReceptionPage from "./pages/ReceptionPage";

import { loadAppointments, saveAppointments } from "./utils/storage";
import "./App.css";

function App() {
  const [appointments, setAppointments] = useState(loadAppointments);

  useEffect(() => {
    saveAppointments(appointments);
  }, [appointments]);

  return (
    <BrowserRouter>
      <Routes>
        

        {/* Patient Page*/}
        <Route
          path="/patient"
          element={
            <PatientPage
              appointments={appointments}
              setAppointments={setAppointments}
            />
          }
        />

        {/* Mitarbeiter Page*/}
        <Route
          path="/reception"
          element={
            <ReceptionPage
              appointments={appointments}
              setAppointments={setAppointments}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;