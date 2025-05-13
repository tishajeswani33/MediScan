import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { Camera, RefreshCw, FileSearch } from 'lucide-react';
import { scanMedicine } from '../services/medicineService';

const ScanPage: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState<string | null>(null);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();

  const enableCamera = async () => {
    try {
      setCameraEnabled(true);
      setScanError(null);
    } catch (error) {
      setScanError('Failed to access camera. Please check permissions and try again.');
      console.error('Camera access error:', error);
    }
  };

  const handleScan = useCallback(async () => {
    setIsScanning(true);
    setScanError(null);
    
    try {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        
        if (!imageSrc) {
          throw new Error('Could not capture image');
        }
        
        // For demo purposes, we'll simulate scanning with a timeout
        // In a real app, you would send the image to a backend service for processing
        setTimeout(() => {
          // For demo, let's redirect to a hardcoded medicine ID
          // In real app, this would be the ID returned from the scanning service
          navigate('/medicine/paracetamol-500mg');
        }, 2000);
      }
    } catch (error) {
      setScanError('Failed to scan medicine. Please try again.');
      console.error('Scan error:', error);
    } finally {
      // Keep this commented out for demo to prevent resetting the scanning state
      // In real app, we'd reset after scanning completes or fails
      // setIsScanning(false);
    }
  }, [navigate]);

  const goToSearch = () => {
    navigate('/search');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Scan Your Medicine</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Point your camera at the medicine package, label, or barcode to get detailed information.
        </p>
      </div>

      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        {!cameraEnabled ? (
          <div className="p-8 text-center">
            <div className="bg-gray-100 rounded-lg p-8 mb-6">
              <Camera className="h-16 w-16 text-primary-500 mx-auto mb-4" />
              <p className="text-gray-600 mb-6">
                Allow access to your camera to scan medication packages, labels, or barcodes.
              </p>
              <button 
                onClick={enableCamera}
                className="btn btn-primary"
              >
                Enable Camera
              </button>
            </div>
            
            <div className="text-center mt-4">
              <button 
                onClick={goToSearch}
                className="btn btn-outline flex mx-auto"
              >
                <FileSearch className="mr-2 h-5 w-5" />
                Search Instead
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="relative scanner-target">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  width: 720,
                  height: 720,
                  facingMode: "environment"
                }}
                className="w-full h-80 object-cover"
              />
              {isScanning && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <RefreshCw className="h-10 w-10 mx-auto mb-2 animate-spin" />
                    <p>Scanning medicine...</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t">
              {scanError && (
                <div className="mb-4 p-3 bg-error-50 text-error-700 rounded-md">
                  {scanError}
                </div>
              )}
              
              <button 
                onClick={handleScan}
                disabled={isScanning}
                className={`btn btn-primary w-full ${isScanning ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isScanning ? 'Scanning...' : 'Scan Medicine'}
              </button>
              
              <div className="text-center mt-4">
                <button 
                  onClick={goToSearch}
                  className="text-primary-500 hover:underline"
                >
                  Search manually instead
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="max-w-lg mx-auto mt-8 bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-2">Scanning Tips</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mr-2">1</span>
            Ensure good lighting for better scan results
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mr-2">2</span>
            Focus on the medicine name or barcode
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mr-2">3</span>
            Hold your device steady while scanning
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScanPage;