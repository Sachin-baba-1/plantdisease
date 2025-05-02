# Plant Disease Detection Application

This application helps users identify and treat plant diseases by uploading images of affected plants. The system uses a machine learning model to analyze the images and provide disease diagnosis, severity assessment, and treatment recommendations.

## Features

- Upload and analyze plant images
- Get detailed disease information and treatment recommendations
- View scan history and past results
- Beautiful, responsive UI design

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Python Flask API
- **ML Model**: Dummy model (placeholder for real ML implementation)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python (3.8 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/plant-disease-detector.git
   cd plant-disease-detector
   ```

2. Install frontend dependencies
   ```bash
   npm install
   ```

3. Install backend dependencies
   ```bash
   cd api
   pip install -r requirements.txt
   cd ..
   ```

### Running the Application

1. Start the backend API server
   ```bash
   npm run start-api
   ```

2. In a new terminal, start the frontend development server
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
plant-disease-detector/
├── api/                      # Python Flask backend
│   ├── app.py                # Main API file
│   └── requirements.txt      # Python dependencies
├── public/                   # Static assets
├── src/
│   ├── components/           # React components
│   ├── pages/                # Page components
│   ├── services/             # API service functions
│   ├── App.tsx               # Main App component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── package.json              # Frontend dependencies
└── README.md                 # Documentation
```

## Replacing the ML Model

The current implementation uses a dummy ML model that returns predefined results. To implement a real ML model:

1. Update the `dummy_plant_identification` and `dummy_disease_detection` functions in `api/app.py`
2. Implement the actual image analysis logic using a framework like TensorFlow or PyTorch
3. The API contract remains the same, so the frontend doesn't need to change

## License

This project is licensed under the MIT License - see the LICENSE file for details.