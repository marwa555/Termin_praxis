import { initialAppointments } from "../data/initialAppointments";

const STORAGE_KEY = "praxisTerminAppointments";

export function loadAppointments() {
  const savedAppointments = localStorage.getItem(STORAGE_KEY);

  if (savedAppointments !== null) {
    return JSON.parse(savedAppointments);
  }

  return initialAppointments;
}

export function saveAppointments(appointments) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(appointments)
  );
}