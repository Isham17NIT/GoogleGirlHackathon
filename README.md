# 🧠 MediScan AI(Brain MRI & 🩺 Kidney CT Scan Classification API)

## 🚀 Overview
 MediScan AI has been developed as an intelligent medical assistant that analyzes medical images using deep learning techniques. The system automates disease classification, assisting healthcare professionals in making accurate and timely diagnoses. MediScan AI aims to improve access to advanced diagnostic support, especially in remote and under-resourced areas. This is **FastAPI-based web service** processes uploaded images and predicts disease categories using trained deep learning models.

## 🌟 Features
- ✅ Upload **Brain MRI** or **Kidney CT Scan** images
- ✅ Automatic **image preprocessing** (resizing, normalization)
- ✅ Predict disease category using **deep learning models**
- ✅ Fast API response for **real-time predictions**

---

## 🛠️ Tech Stack Used
| Technology | Purpose |
|------------|---------|
| **Python** | Main programming language |
| **FastAPI** | Web framework for API development |
| **PyTorch** | Deep learning framework for model training |
| **Swin Transformer** | Model architecture for image classification |
| **PIL (Pillow)** | Image processing library |
| **Uvicorn** | ASGI server for running FastAPI |
| **NumPy & OpenCV** | Image preprocessing and manipulation |
| **Google Colab** | Model training environment |
| **GitHub** | Version control and project hosting |

## 🔬 Model Details
### **🧠 Brain Tumor Classification**
- **Classes:** `Normal`, `Glioma`, `Meningioma`, `Pituitary`

### **🩺 Kidney Disease Classification**
- **Classes:** `Cyst`, `Normal`, `Tumor`, `Stone`

---

## 📂 Dataset Used
- **Brain Tumor MRI dataset** (https://www.kaggle.com/datasets/rm1000/brain-tumor-mri-scans)
- **Kidney CT Scan dataset** (https://www.kaggle.com/datasets/anima890/kidney-ct-scan/data)

---
