import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function ResultPage() {
  const { scanId } = useParams();
  const location = useLocation() as any;
  const imagePreview = location.state?.imagePreview;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Prediction Result</h2>
      {imagePreview && <img src={imagePreview} alt="Uploaded" className="w-64 h-64 object-contain" />}
      <p className="mt-4 text-lg">🩺 <strong>Disease Prediction:</strong> {decodeURIComponent(scanId)}</p>
    </div>
  );
}

export default ResultPage;
