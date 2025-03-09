# 🧠 MediScan AI(Brain MRI & 🩺 Kidney CT Scan Classification)

## 🚀 Overview
MediScan AI has been developed as an intelligent medical assistant that analyzes medical images using deep learning techniques. The system automates disease classification, thus enabling healthcare professionals to make accurate and timely diagnoses. It aims to improve access to advanced diagnostic support, especially in remote and under-resourced areas. This is a **Flask-based web service** that processes uploaded images and predicts disease categories using fine-tuned Swin Transformer model.

---
## Web App Demo: 
A recorded demonstration of the model’s deployment is available at: https://drive.google.com/file/d/1lkhG0n6sl0EJkXKrKg8DGS41LR1-K8Sn/view?usp=drive_link
## 🌟 Features
- ✅ Upload **Brain MRI** or **Kidney CT Scan** images
- ✅ Automatic **image preprocessing** (resizing, normalization)
- ✅ Predict disease category using **deep learning models**
- ✅ Fast API response for **real-time predictions**

---

## 🛠️ Tech Stack Used  

| Technology           | Purpose                                      |
|--------------------  |----------------------------------------------|
| **Python**           | Main programming language                   |
| **Flask**            | Web framework for API development           |
| **React**            | Frontend framework for building the UI      |
| **CSS**              | Styling the frontend                        |
| **PyTorch**          | Deep learning framework for model training  |
| **Swin Transformer** | Model architecture for image classification |
| **PIL & TorchVision**| Image processing library                    |
| **Scikit-learn**| Computing Evaluation metrics        |
| **Seaborn & Matplotlib**| Data Visualization     |
| **Google Colab**  | Model training environment                  |


## 🔬 Model Details
### **🧠 Brain Tumor Classification**
- **Classes:** `Normal`, `Glioma`, `Meningioma`, `Pituitary`

### **🩺 Kidney Disease Classification**
- **Classes:** `Cyst`, `Normal`, `Tumor`, `Stone`

---

## 📂 Trained Models
- **Brain MRI Classification** (https://drive.google.com/file/d/114V2aWEpmGJ5zyu6hNgrsGlS81sI40xJ/view?usp=sharing)
- **Kidney CT Scan Classification** (https://drive.google.com/file/d/1tdPkbwpj0cf9C52cfY9blKUuOKafT1WL/view?usp=sharing)

---

## 📂 Dataset Used
- **Brain Tumor MRI dataset** (https://www.kaggle.com/datasets/rm1000/brain-tumor-mri-scans)
- **Kidney CT Scan dataset** (https://www.kaggle.com/datasets/anima890/kidney-ct-scan/data)

---
## 📊 Model Training Results
- **Brain Tumor Classification**
  - **Train/Val/Test Split:** 70% / 15% / 15%
  - **Epochs:** 7
  - **Validation Accuracy:** 98.68%
  - **Test Accuracy:** 98.97%

- **Kidney CT Scan Classification**
  - **Train/Val/Test Split:** 70% / 15% / 15%
  - **Epochs:** 7
  - **Validation Accuracy:** 99.84%
  - **Test Accuracy:** 99.68%






  

 
