import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { GiBrain } from "react-icons/gi";
import { GiKidneys } from "react-icons/gi";
const HomePage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleSelect = (type) => {
    setSelected(type);
    setTimeout(() => {
      navigate(`/upload/${type}`);
    });
  };

  return (
    <div className="homepage">
        <div className="header">AI-Powered Diagnosis at Your Fingertips</div>
      <div className="options">
        <button className="brain-button" onClick={() => handleSelect("Brain")}>
        <GiBrain className="brain-icon" />
          Brain Diagnosis
        </button>
        <button className="kidney-button" onClick={() => handleSelect("Kidney")}>
            <GiKidneys className="kidney-icon"/>
          Kidney Diagnosis
        </button>
      </div>
    </div>
  );
};

export default HomePage;
