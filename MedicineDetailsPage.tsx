import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, AlertCircle, Info, Thermometer, BookmarkPlus, BookmarkCheck, ArrowLeft, Pill } from 'lucide-react';
import { getMedicineDetails, toggleBookmark } from '../services/medicineService';
import { Medicine } from '../types/Medicine';

const MedicineDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState<Medicine | null>(null);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        if (id) {
          setLoading(true);
          const data = await getMedicineDetails(id);
          setMedicine(data);
          setIsBookmarked(data.isBookmarked || false);
        }
      } catch (error) {
        console.error('Error fetching medicine details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicine();
  }, [id]);

  const handleBookmark = async () => {
    if (medicine) {
      try {
        await toggleBookmark(medicine.id);
        setIsBookmarked(!isBookmarked);
      } catch (error) {
        console.error('Error toggling bookmark:', error);
      }
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse text-primary-500">
          <Pill className="h-12 w-12 animate-pulse" />
          <p className="mt-2">Loading medicine details...</p>
        </div>
      </div>
    );
  }

  if (!medicine) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <AlertCircle className="h-16 w-16 text-error-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Medicine Not Found</h1>
        <p className="text-gray-600 mb-6">The medicine you are looking for could not be found in our database.</p>
        <button 
          onClick={goBack} 
          className="btn btn-primary"
        >
          Go Back
        </button>
      </div>
    );
  }

  const isExpired = new Date(medicine.expiryDate) < new Date();
  const expiryStatus = isExpired 
    ? <span className="badge badge-error">Expired</span>
    : <span className="badge badge-success">Valid</span>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
      <button 
        onClick={goBack}
        className="flex items-center text-gray-600 hover:text-primary-500 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back
      </button>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-primary-500 px-6 py-6 flex justify-between items-start">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{medicine.name}</h1>
            <div className="flex flex-wrap items-center gap-2 text-white text-opacity-90">
              <span>{medicine.strength}</span>
              <span>•</span>
              <span>{medicine.form}</span>
            </div>
          </div>
          <button 
            onClick={handleBookmark}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-colors"
            aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
          >
            {isBookmarked ? (
              <BookmarkCheck className="h-6 w-6 text-white" />
            ) : (
              <BookmarkPlus className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        <div className="flex overflow-x-auto border-b">
          <button
            className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'border-primary-500 text-primary-500' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
              activeTab === 'sideEffects' 
                ? 'border-primary-500 text-primary-500' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('sideEffects')}
          >
            Side Effects
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
              activeTab === 'dosage' 
                ? 'border-primary-500 text-primary-500' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('dosage')}
          >
            Dosage
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
              activeTab === 'storage' 
                ? 'border-primary-500 text-primary-500' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('storage')}
          >
            Storage & Expiry
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Purpose</h2>
                <p className="text-gray-700">{medicine.purpose}</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Active Ingredients</h3>
                  <ul className="space-y-1">
                    {medicine.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-600">{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Medical Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {medicine.categories.map((category, index) => (
                      <span key={index} className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {medicine.warnings.length > 0 && (
                <div className="bg-warning-50 border border-warning-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <AlertCircle className="text-warning-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-warning-800 mb-2">Important Warnings</h3>
                      <ul className="space-y-1 text-warning-700">
                        {medicine.warnings.map((warning, index) => (
                          <li key={index}>{warning}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'sideEffects' && (
            <div className="animate-fade-in">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Common Side Effects</h2>
                <ul className="space-y-2">
                  {medicine.sideEffects.common.map((effect, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block bg-gray-200 h-1.5 w-1.5 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Serious Side Effects</h2>
                <p className="text-gray-600 mb-3">Seek immediate medical attention if you experience any of these serious side effects:</p>
                <ul className="space-y-2">
                  {medicine.sideEffects.serious.map((effect, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block bg-error-500 h-1.5 w-1.5 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-error-50 border border-error-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="text-error-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-error-800 mb-2">Overdose Warning</h3>
                    <p className="text-error-700 mb-2">
                      Taking more than the recommended dose can lead to serious health complications or be fatal.
                    </p>
                    <p className="text-error-700">
                      {medicine.overdoseEffects}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dosage' && (
            <div className="animate-fade-in">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Recommended Dosage</h2>
                <p className="text-gray-700 mb-4">{medicine.dosage.description}</p>
                
                <div className="space-y-4">
                  {medicine.dosage.ageGroups.map((group, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">{group.group}</h3>
                      <p className="text-gray-600">{group.dosage}</p>
                      {group.notes && (
                        <p className="text-gray-500 mt-1 text-sm italic">{group.notes}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Info className="text-primary-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary-800 mb-2">Administration</h3>
                    <p className="text-primary-700">
                      {medicine.administration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'storage' && (
            <div className="animate-fade-in">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Storage Conditions</h2>
                <div className="flex items-start mb-3">
                  <Thermometer className="text-gray-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">Temperature</h3>
                    <p className="text-gray-600">{medicine.storage.temperature}</p>
                  </div>
                </div>
                
                <p className="text-gray-700">{medicine.storage.instructions}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <Clock className="text-gray-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Expiry Information</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600">Expiry Date: {new Date(medicine.expiryDate).toLocaleDateString()}</p>
                      {expiryStatus}
                    </div>
                    <p className="text-gray-500 mt-2">
                      {isExpired 
                        ? "This medicine has expired and should not be used. Please dispose of it properly." 
                        : "This medicine is within its expiry date and should be safe to use if stored correctly."}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Disposal Instructions</h2>
                <p className="text-gray-700">{medicine.disposal}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-xl p-6">
        <div className="flex items-start">
          <AlertCircle className="text-primary-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Medical Disclaimer</h3>
            <p className="text-gray-600 text-sm">
              This information is for educational purposes only and is not intended as a substitute for medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetailsPage;