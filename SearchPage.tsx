import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Filter, AlertCircle } from 'lucide-react';
import { searchMedicines } from '../services/medicineService';
import { Medicine } from '../types/Medicine';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Medicine[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedForms, setSelectedForms] = useState<string[]>([]);

  const categories = ['Analgesic', 'Antibiotic', 'Antiviral', 'Antihistamine', 'Anti-inflammatory'];
  const forms = ['Tablet', 'Capsule', 'Liquid', 'Injection', 'Topical'];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const results = await searchMedicines(searchTerm, {
        categories: selectedCategories,
        forms: selectedForms
      });
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setHasSearched(false);
  };

  const toggleFilter = () => {
    setShowFilters(!showFilters);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const toggleForm = (form: string) => {
    setSelectedForms(prev => 
      prev.includes(form) 
        ? prev.filter(f => f !== form) 
        : [...prev, form]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedForms([]);
  };

  const handleMedicineClick = (medicineId: string) => {
    navigate(`/medicine/${medicineId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Search Medicines</h1>
        
        <form onSubmit={handleSearch} className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter medicine name..."
              className="pl-10 pr-10 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute inset-y-0 right-12 pr-3 flex items-center"
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
            <button
              type="button"
              onClick={toggleFilter}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <Filter className={`h-5 w-5 ${showFilters || selectedCategories.length || selectedForms.length ? 'text-primary-500' : 'text-gray-400 hover:text-gray-600'}`} />
            </button>
          </div>
          
          {showFilters && (
            <div className="mt-3 p-4 bg-gray-50 rounded-lg animate-slide-up">
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-medium text-gray-700">Filters</h2>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm text-primary-500 hover:underline"
                >
                  Clear all
                </button>
              </div>
              
              <div className="mb-3">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => toggleCategory(category)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        selectedCategories.includes(category)
                          ? 'bg-primary-500 text-white'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Forms</h3>
                <div className="flex flex-wrap gap-2">
                  {forms.map(form => (
                    <button
                      key={form}
                      type="button"
                      onClick={() => toggleForm(form)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        selectedForms.includes(form)
                          ? 'bg-primary-500 text-white'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {form}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          <button
            type="submit"
            className="mt-3 w-full btn btn-primary py-3"
            disabled={isLoading}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </form>
        
        {isLoading ? (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary-500 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Searching medicines...</p>
          </div>
        ) : (
          <>
            {hasSearched && (
              <div className="mb-4">
                <p className="text-gray-600">
                  {searchResults.length === 0
                    ? 'No medicines found for your search.'
                    : `Found ${searchResults.length} medicine${searchResults.length === 1 ? '' : 's'}`}
                </p>
              </div>
            )}
            
            {searchResults.length > 0 ? (
              <div className="space-y-4">
                {searchResults.map(medicine => (
                  <div
                    key={medicine.id}
                    onClick={() => handleMedicineClick(medicine.id)}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md cursor-pointer transition-shadow"
                  >
                    <h2 className="font-semibold text-lg text-gray-900">{medicine.name}</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{medicine.strength}</span>
                      <span>•</span>
                      <span>{medicine.form}</span>
                    </div>
                    <p className="text-gray-600 line-clamp-2">{medicine.purpose}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {medicine.categories.map((category, index) => (
                        <span key={index} className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-0.5 rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : hasSearched && (
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No medicines found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or filters.
                </p>
              </div>
            )}
          </>
        )}
        
        {!hasSearched && (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">Search our medicine database</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Enter a medicine name, active ingredient, or category to find detailed information.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;