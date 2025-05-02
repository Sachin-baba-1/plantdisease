import axios from 'axios';

// Define interfaces for the application
export interface ScanResult {
  scanId: string;
  plantType: string;
  imageUrl: string;
  confidence: number;
  timestamp: string;
  disease: {
    name: string;
    scientificName: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
    symptoms: string[];
    treatments: string[];
    prevention: string[];
  };
  care: {
    watering: string;
    sunlight: string;
    fertilizing: string;
    soil: string;
  };
}

// Dummy API endpoint - in a real app, this would be replaced with an actual API
const API_URL = 'http://localhost:5000/api';

// Mocked data for demonstration purposes
const scansData: ScanResult[] = [
  {
    scanId: '1',
    plantType: 'Tomato',
    imageUrl: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    confidence: 95,
    timestamp: new Date(Date.now() - 86400000 * 3).toISOString(), // 3 days ago
    disease: {
      name: 'Late Blight',
      scientificName: 'Phytophthora infestans',
      description: 'Late blight is a potentially devastating disease of tomato and potato, infecting leaves, stems, and fruits of plants. The disease spreads quickly in wet weather.',
      severity: 'high',
      symptoms: [
        'Dark, water-soaked spots on leaves',
        'White fuzzy growth on underside of leaves',
        'Brown lesions on stems',
        'Fruits develop dark, firm lesions'
      ],
      treatments: [
        'Remove and destroy infected plant parts',
        'Apply copper-based fungicide',
        'Improve air circulation around plants',
        'Avoid overhead watering'
      ],
      prevention: [
        'Plant resistant varieties',
        'Space plants for good air circulation',
        'Rotate crops annually',
        'Avoid overhead irrigation',
        'Apply preventative fungicide before symptoms appear'
      ]
    },
    care: {
      watering: 'Regular, consistent',
      sunlight: 'Full sun',
      fertilizing: 'Every 2-3 weeks',
      soil: 'Well-draining, fertile'
    }
  },
  {
    scanId: '2',
    plantType: 'Apple Tree',
    imageUrl: 'https://images.pexels.com/photos/1047330/pexels-photo-1047330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    confidence: 88,
    timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    disease: {
      name: 'Apple Scab',
      scientificName: 'Venturia inaequalis',
      description: 'Apple scab is a common disease of apple trees that affects both leaves and fruit. It causes dark, scabby lesions on fruit and olive-green to brown spots on leaves.',
      severity: 'medium',
      symptoms: [
        'Olive-green to brown spots on leaves',
        'Dark, scabby lesions on fruit',
        'Premature leaf drop',
        'Deformed fruits'
      ],
      treatments: [
        'Apply fungicide during growing season',
        'Remove and destroy fallen leaves',
        'Prune to improve air circulation',
        'Apply lime sulfur during dormant season'
      ],
      prevention: [
        'Plant resistant varieties',
        'Remove fallen leaves in autumn',
        'Apply preventative fungicide sprays',
        'Ensure proper spacing between trees',
        'Avoid overhead irrigation'
      ]
    },
    care: {
      watering: 'Weekly, deeply',
      sunlight: 'Full sun',
      fertilizing: 'Early spring',
      soil: 'Loamy, well-draining'
    }
  },
  {
    scanId: '3',
    plantType: 'Rose',
    imageUrl: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    confidence: 92,
    timestamp: new Date().toISOString(), // Today
    disease: {
      name: 'Black Spot',
      scientificName: 'Diplocarpon rosae',
      description: 'Black spot is a fungal disease that affects roses. It causes black spots on leaves, which eventually yellow and drop. It can weaken the plant if left untreated.',
      severity: 'low',
      symptoms: [
        'Black spots with feathery margins on leaves',
        'Yellowing leaves',
        'Premature leaf drop',
        'Reduced flowering'
      ],
      treatments: [
        'Remove infected leaves',
        'Apply fungicide labeled for black spot',
        'Ensure good air circulation',
        'Avoid wetting leaves when watering'
      ],
      prevention: [
        'Plant resistant varieties',
        'Space plants for good air circulation',
        'Water at base of plant',
        'Apply preventative fungicide',
        'Clean up fallen leaves'
      ]
    },
    care: {
      watering: 'Twice weekly',
      sunlight: 'Full sun to partial shade',
      fertilizing: 'Monthly during growing season',
      soil: 'Rich, well-draining'
    }
  }
];

/**
 * Analyzes a plant image for disease detection
 * This is a mock implementation that simulates an API call
 */
export const analyzePlantImage = async (imageFile: File): Promise<ScanResult> => {
  // In a real implementation, this would upload the image to a server for analysis
  // For demo purposes, we'll return a dummy result after a short delay
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // Generate a random scan ID and choose a random existing scan result
      const randomIndex = Math.floor(Math.random() * scansData.length);
      const result = {
        ...scansData[randomIndex],
        scanId: Math.random().toString(36).substring(2, 10),
        timestamp: new Date().toISOString(),
        imageUrl: URL.createObjectURL(imageFile) // Use the uploaded image
      };
      
      resolve(result);
    }, 2000); // Simulate a 2-second API call
  });
};

/**
 * Retrieves a scan result by ID
 */
export const getScanResult = async (scanId: string): Promise<ScanResult> => {
  // In a real implementation, this would fetch data from the API
  // For demo purposes, we'll find the scan in our dummy data or return the first one
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const scan = scansData.find(s => s.scanId === scanId) || scansData[0];
      if (scan) {
        resolve(scan);
      } else {
        reject(new Error('Scan not found'));
      }
    }, 1000); // Simulate a 1-second API call
  });
};

/**
 * Retrieves the history of scans
 */
export const getScansHistory = async (): Promise<ScanResult[]> => {
  // In a real implementation, this would fetch data from the API
  // For demo purposes, we'll return our dummy data
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(scansData);
    }, 1000); // Simulate a 1-second API call
  });
};