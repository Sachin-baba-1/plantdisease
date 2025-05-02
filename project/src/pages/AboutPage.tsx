import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Database, Code, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-8">About PlantDoctor</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-10">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="h-16 w-16 text-primary-600" />
          <h2 className="text-3xl font-bold ml-3">PlantDoctor</h2>
        </div>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          PlantDoctor is an application designed to help gardeners, farmers, and plant enthusiasts identify and treat 
          plant diseases quickly and effectively. Using advanced machine learning technology, our application can analyze 
          images of plants and diagnose various diseases, providing you with information about the disease and recommended 
          treatments.
        </p>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our goal is to make plant disease identification accessible to everyone, helping to reduce crop losses, 
          save valuable plants, and promote sustainable gardening and farming practices.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <Database className="h-10 w-10 text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Extensive Database</h3>
          <p className="text-gray-600">
            Our system is trained on thousands of plant disease images, enabling accurate identification
            of common plant diseases across various plant species.
          </p>
        </div>
        
        <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Code className="h-10 w-10 text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Technology</h3>
          <p className="text-gray-600">
            Powered by advanced machine learning algorithms that continuously improve over time,
            ensuring increasingly accurate disease detection results.
          </p>
        </div>
        
        <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Users className="h-10 w-10 text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
          <p className="text-gray-600">
            Designed with simplicity in mind, making it easy for anyone - from gardening beginners 
            to professional farmers - to identify plant diseases.
          </p>
        </div>
      </div>
      
      <div className="bg-primary-50 rounded-xl p-8 border border-primary-100 mb-12">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg">
              1
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-1">Take a Photo</h3>
              <p className="text-gray-700">
                Take a clear, well-lit photo of the affected part of your plant. Focus on the areas showing symptoms of disease.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg">
              2
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-1">Upload to PlantDoctor</h3>
              <p className="text-gray-700">
                Upload the photo to our system. Our ML model will analyze the image and identify the disease.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg">
              3
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-1">Get Diagnosis</h3>
              <p className="text-gray-700">
                Receive detailed information about the identified disease, including symptoms, causes, and severity.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg">
              4
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-1">Follow Treatment Recommendations</h3>
              <p className="text-gray-700">
                Get recommended treatments and prevention tips specific to the identified disease to help your plant recover.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
        <p className="text-gray-700 mb-6">
          PlantDoctor uses a convolutional neural network (CNN) trained on a diverse dataset of plant disease images. 
          The model can identify various diseases affecting common crops and houseplants with high accuracy.
        </p>
        <p className="text-gray-700 mb-6">
          The application is designed with a modular architecture that allows us to continuously improve the ML model 
          without affecting the user experience. As our database grows and the model learns from more examples, the 
          accuracy and range of detectable diseases will continue to improve.
        </p>
        <p className="text-gray-700">
          We are committed to making plant disease detection accessible and accurate for everyone, helping to reduce 
          crop losses and promote sustainable gardening and farming practices.
        </p>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to try PlantDoctor?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link to="/detect" className="btn btn-primary">
            Start Scanning
          </Link>
          <Link to="/" className="btn btn-outline">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;