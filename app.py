from flask import Flask, request, jsonify
import torch
import torch.nn as nn
import torch.nn.functional as F
import torchvision.transforms as transforms
from transformers import SwinForImageClassification
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the pre-trained Swin model for both kidney and brain
def load_model(model_path, num_classes=4):
    model = SwinForImageClassification.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
    model.classifier = nn.Linear(model.classifier.in_features, num_classes)  # Adjust classifier
    model.load_state_dict(torch.load(model_path, map_location=torch.device("cpu")))
    model.eval()  # Set model to evaluation mode
    return model

# Load both models
kidney_model = load_model("./swin_kidney_ct_scan_detection.pth", num_classes=4)
brain_model = load_model("./swin_brain_tumor_detection.pth", num_classes=4)

# Image transformations
transform = transforms.Compose([
    transforms.Resize((224, 224)),  
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),  
])

print("Models loaded successfully.")

@app.route("/predict", methods=["POST"])
def predict():
    """Handles image uploads and predicts using the selected model."""
    try:
        if "file" not in request.files or "model_type" not in request.form:
            return jsonify({"error": "Missing file or model_type (kidney/brain)"}), 400

        file = request.files["file"]
        model_type = request.form["model_type"].lower()  # Get model type from frontend
        # Select the appropriate model
        print(model_type)
        if model_type == "kidney":
            model = kidney_model
            class_labels = ["Cyst", "Normal", "Stone", "Tumor"]
        elif model_type == "brain":
            model = brain_model
            class_labels = ["Glioma", "Healthy", "Meningioma", "Pituitary"]
        else:
            return jsonify({"error": "Invalid model_type. Use 'kidney' or 'brain'."}), 400

        # Preprocess the image
        image = Image.open(file).convert("RGB")
        image = transform(image).unsqueeze(0)

        # Perform inference
        with torch.no_grad():
            output = model(image) 

        # Apply softmax to get probabilities
        probabilities = F.softmax(output.logits, dim=1)
        predicted_class = torch.argmax(probabilities, dim=1).item()
        confidence = probabilities[0, predicted_class].item()

        return jsonify({
            "model_used": model_type,
            "prediction": class_labels[predicted_class], 
            "confidence": confidence
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
