import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookmarkX, BookmarkCheck, Search } from 'lucide-react';
import { getBookmarkedMedicines, toggleBookmark } from '../services/medicineService';
import { Medicine } from '../types/Medicine';

const BookmarksPage: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        setLoading(true);
        const data = await getBookmarkedMedicines();
        setBookmarks(data);
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  const handleRemoveBookmark = async (e: React.MouseEvent, medicineId: string) => {
    e.stopPropagation(); // Prevent navigation when clicking the remove button
    
    try {
      await toggleBookmark(medicineId);
      setBookmarks(prev => prev.filter(medicine => medicine.id !== medicineId));
    } catch (error) {
      console.error('Error removing bookmark:', error);
    }
  };

  const handleMedicineClick = (medicineId: string) => {
    navigate(`/medicine/${medicineId}`);
  };

  const navigateToSearch = () => {
    navigate('/search');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse text-primary-500">
          <BookmarkCheck className="h-12 w-12 animate-pulse" />
          <p className="mt-2">Loading your bookmarks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">My Bookmarks</h1>
        <p className="text-gray-600 mb-6">Quick access to your saved medications</p>
        
        {bookmarks.length > 0 ? (
          <div className="space-y-4">
            {bookmarks.map(medicine => (
              <div
                key={medicine.id}
                onClick={() => handleMedicineClick(medicine.id)}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md cursor-pointer transition-shadow relative"
              >
                <div className="pr-10">
                  <h2 className="font-semibold text-lg text-gray-900">{medicine.name}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span>{medicine.strength}</span>
                    <span>•</span>
                    <span>{medicine.form}</span>
                  </div>
                  <p className="text-gray-600 line-clamp-2">{medicine.purpose}</p>
                </div>
                <button
                  onClick={(e) => handleRemoveBookmark(e, medicine.id)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-error-500 transition-colors"
                  aria-label="Remove bookmark"
                >
                  <BookmarkX className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-gray-50 rounded-lg py-12 px-4">
            <BookmarkCheck className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No bookmarked medicines</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              You haven't bookmarked any medicines yet. Bookmark medications you use regularly for quick access.
            </p>
            <button
              onClick={navigateToSearch}
              className="btn btn-primary inline-flex items-center"
            >
              <Search className="mr-2 h-5 w-5" />
              Search Medicines
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookmarksPage;