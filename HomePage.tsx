import React from 'react';
import { Link } from 'react-router-dom';
import { Scan, Search, BookmarkCheck, AlertTriangle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-primary-500">Understand</span> Your Medications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Scan your medicine and instantly learn about its purpose, potential side effects, dosage information, and expiry dates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/scan" className="btn btn-primary text-lg py-3 px-8">
              <Scan className="w-5 h-5 mr-2" />
              Scan Medicine
            </Link>
            <Link to="/search" className="btn btn-outline text-lg py-3 px-8">
              <Search className="w-5 h-5 mr-2" />
              Search Database
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How MediScan Helps You</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card hover:shadow-md transition-shadow">
            <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Scan className="text-primary-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Scanning</h3>
            <p className="text-gray-600">Instantly identify medications by scanning the package or label with your device's camera.</p>
          </div>
          
          <div className="card hover:shadow-md transition-shadow">
            <div className="rounded-full bg-secondary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <AlertTriangle className="text-secondary-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safety Warnings</h3>
            <p className="text-gray-600">Receive clear warnings about potential side effects and the dangers of excessive use.</p>
          </div>
          
          <div className="card hover:shadow-md transition-shadow">
            <div className="rounded-full bg-accent-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <BookmarkCheck className="text-accent-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Save Medications</h3>
            <p className="text-gray-600">Bookmark your medications for quick access to important information whenever you need it.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to understand your medications better?</h2>
          <p className="text-lg mb-8">Start scanning your medicines now and get instant, reliable information.</p>
          <Link to="/scan" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg py-3 px-8">
            Get Started
          </Link>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="bg-warning-50 border border-warning-200 rounded-xl p-6">
          <div className="flex items-start">
            <AlertTriangle className="text-warning-500 w-6 h-6 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-warning-800 mb-2">Important Health Notice</h3>
              <p className="text-warning-700">
                MediScan provides general information about medications. Always consult your healthcare provider for medical advice. This app is not a substitute for professional medical consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;