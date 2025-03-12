//Displays all Professionals with image


import { useNavigate } from 'react-router-dom';

const ProfessionalCard = ({ professional }) => {
  const navigate = useNavigate();
  const imageUrl = professional.imageUrl.startsWith('http')
    ? professional.imageUrl
    : `http://localhost:8080${professional.imageUrl}`;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
      <img 
        src={`http://localhost:8080${professional.imageUrl}`}  
        alt={professional.name} 
        className="w-full h-40 object-cover rounded-lg" 
        onError={(e) => { e.target.src = "/placeholder-img.png"; }}
      />
      <h2 className="text-lg font-bold mt-2">{professional.name}</h2>
      <p className="text-sm text-gray-600">{professional.specialization}</p>
      <div className="mt-4 flex justify-between">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg" 
          onClick={() => navigate(`/professional/${professional.id}`)}
        >
          View
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded-lg" 
          onClick={() => navigate(`/appointment?professionalId=${professional.id}`)}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default ProfessionalCard;


