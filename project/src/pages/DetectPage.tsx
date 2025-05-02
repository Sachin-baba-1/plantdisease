import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DetectPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePredict = async () => {
    if (!image) {
      alert('Please upload an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await fetch('http://127.0.0.1:8080/predict', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      // Navigate to result page with prediction result
      navigate(`/result/${encodeURIComponent(data.prediction)}`, {
        state: { imagePreview: preview },
      });
    } catch (err) {
      console.error('Prediction error:', err);
      alert('Error predicting disease.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Detect Plant Disease</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && <img src={preview} alt="preview" className="mt-4 w-64 h-64 object-contain" />}
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={handlePredict}
      >
        Predict Disease
      </button>
    </div>
  );
}

export default DetectPage;
