import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./upload.css";

const UploadPage = () => {
  const { type } = useParams();
  const model = type ? type.toUpperCase() : "UNKNOWN";
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPrediction(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select an image first.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("model_type", type || "default");

      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to get prediction. Try again.");
      
      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">{model} Diagnosis</h2>

      <div className="upload-box">
        <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
        <button onClick={handleUpload} className="upload-button" disabled={loading}>
          {loading ? "Processing..." : "Upload & Predict"}
        </button>

        {error && <p className="error-text">{error}</p>}

        {prediction && (
          <p className="result-text">
            <strong>Prediction:</strong> {prediction.prediction} <br />
            <strong>Confidence:</strong> {Math.round(prediction.confidence * 100)}%
          </p>
        )}
      </div>
    </div>
  );
};
export default UploadPage;