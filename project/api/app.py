# app.py
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS
import numpy as np
import os
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.models import load_model

app = Flask(__name__)
CORS(app)

# -------- Config --------
BASE_DIR = os.path.abspath(os.path.dirname(__file__))  # project/api/
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'static', 'upload')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)  # Ensure folder exists

MODEL_PATH = os.path.join(BASE_DIR, 'models', 'plant_identification_model.h5')
model = load_model(MODEL_PATH)
print("✅ Model loaded successfully!")

# -------- Prediction function --------
def pred_tomato_disease(image_path):
    img = load_img(image_path, target_size=(128, 128))
    img_array = img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    result = model.predict(img_array)
    pred = np.argmax(result, axis=1)[0]

    labels = [
        "Tomato - Bacteria Spot Disease",
        "Tomato - Early Blight Disease",
        "Tomato - Healthy and Fresh",
        "Tomato - Late Blight Disease",
        "Tomato - Leaf Mold Disease",
        "Tomato - Septoria Leaf Spot Disease",
        "Tomato - Target Spot Disease",
        "Tomato - Tomato Yellow Leaf Curl Virus Disease",
        "Tomato - Tomato Mosaic Virus Disease",
        "Tomato - Two Spotted Spider Mite Disease"
    ]
    return labels[pred]

# -------- Routes --------
@app.route("/predict", methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({"error": "No image selected"}), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)

    pred_label = pred_tomato_disease(file_path)

    return jsonify({
        "prediction": pred_label,
        "imagePath": file_path.replace(BASE_DIR, '').replace("\\", "/")  # Make path frontend-friendly
    })

# -------- Run --------
if __name__ == "__main__":
    app.run(threaded=False, port=8080)
