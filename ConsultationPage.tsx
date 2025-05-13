import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, Search, AlertCircle } from 'lucide-react';
import { searchMedicines } from '../services/medicineService';
import { Medicine } from '../types/Medicine';

const ConsultationPage: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [duration, setDuration] = useState('');
  const [severity, setSeverity] = useState('mild');
  const [recommendations, setRecommendations] = useState<Medicine[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, this would use a more sophisticated matching algorithm
      const results = await searchMedicines(symptoms);
      setRecommendations(results);
    } catch (error) {
      console.error('Error getting recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMedicineClick = (medicineId: string) => {
    navigate(`/medicine/${medicineId}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
      <div className="text-center mb-8">
        <Stethoscope className="h-12 w-12 text-primary-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Health Consultation</h1>
        <p className="text-gray-600">Describe your symptoms to get medicine recommendations</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-1">
              Describe your symptoms or health issues
            </label>
            <textarea
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="E.g., I have a headache with mild fever for the past 2 days..."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                How long have you had these symptoms?
              </label>
              <input
                type="text"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="E.g., 2 days"
                required
              />
            </div>

            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-gray-700 mb-1">
                Severity of symptoms
              </label>
              <select
                id="severity"
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </div>
          </div>

          <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertCircle className="text-warning-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
              <div className="text-sm text-warning-700">
                <strong>Important:</strong> This is not a substitute for professional medical advice. 
                If you have severe symptoms or are unsure about your condition, please consult a healthcare provider.
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn btn-primary py-3"
            disabled={isLoading}
          >
            {isLoading ? 'Getting Recommendations...' : 'Get Recommendations'}
          </button>
        </form>
      </div>

      {recommendations.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Recommended Medicines</h2>
          <div className="space-y-4">
            {recommendations.map(medicine => (
              <div
                key={medicine.id}
                onClick={() => handleMedicineClick(medicine.id)}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md cursor-pointer transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{medicine.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>{medicine.strength}</span>
                  <span>•</span>
                  <span>{medicine.form}</span>
                </div>
                <p className="text-gray-700 mb-4">{medicine.purpose}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Key Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {medicine.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {medicine.categories.map((category, index) => (
                    <span
                      key={index}
                      className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-0.5 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationPage;