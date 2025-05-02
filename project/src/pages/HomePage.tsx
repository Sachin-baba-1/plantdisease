import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Upload, History, Info } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Keep Your Plants <span className="text-primary-600">Healthy</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Detect plant diseases instantly with our AI-powered plant disease detection tool.
          Upload a photo of your plant and get diagnosis and treatment recommendations.
        </p>
        <Link to="/detect" className="btn btn-primary text-lg px-8 py-3">
          Scan Your Plant Now
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="card p-6 flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <Upload className="w-12 h-12 text-primary-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Upload Photo</h3>
          <p className="text-gray-600">
            Take a clear photo of the affected plant part and upload it to our system.
          </p>
        </div>

        <div className="card p-6 flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Leaf className="w-12 h-12 text-primary-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Get Diagnosis</h3>
          <p className="text-gray-600">
            Our AI model analyzes the image and identifies the disease affecting your plant.
          </p>
        </div>

        <div className="card p-6 flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Info className="w-12 h-12 text-primary-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Treatment Guide</h3>
          <p className="text-gray-600">
            Receive detailed information about the disease and recommended treatment options.
          </p>
        </div>
      </div>

      <div className="mt-20 bg-primary-50 rounded-xl p-8 border border-primary-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-700 mb-4">
              Our plant disease detection system uses a machine learning model trained on thousands
              of images of plant diseases. The model can identify common diseases affecting various plants
              and provide accurate diagnosis.
            </p>
            <p className="text-gray-700 mb-4">
              Simply take a clear photo of the affected part of your plant, upload it to our system,
              and get instant results. Our database includes information about diseases, their causes,
              and recommended treatments.
            </p>
            <Link to="/about" className="btn btn-outline inline-flex items-center">
              <Info className="w-4 h-4 mr-2" />
              Learn More
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/7728384/pexels-photo-7728384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Plant inspection" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to diagnose your plant?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link to="/detect" className="btn btn-primary flex items-center justify-center">
            <Upload className="w-4 h-4 mr-2" />
            Scan Plant Now
          </Link>
          <Link to="/history" className="btn btn-outline flex items-center justify-center">
            <History className="w-4 h-4 mr-2" />
            View Scan History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;