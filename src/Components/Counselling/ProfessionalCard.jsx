import { useState } from "react";
import BookingForm from "./BookingForm";

const ProfessionalCard = ({ professional }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="border p-4 rounded shadow-lg">
      <h3 className="text-lg font-bold">{professional.name}</h3>
      <p>{professional.specialization}</p>
      <button
        className="bg-blue-500 text-white p-2 rounded mt-2"
        onClick={() => setShowForm(true)}
      >
        Book Appointment
      </button>

      {showForm && <BookingForm professional={professional} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default ProfessionalCard;
