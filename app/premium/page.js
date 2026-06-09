"use client";

import { useState } from "react";
import "./premium.css";

export default function PremiumPage() {
  const [paid, setPaid] = useState(false);

  const [formData, setFormData] = useState({
    cardholder: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    email: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("isPremium", "true");

    setPaid(true);
  }

    if (paid) {
    return (
        <div className="premium-container">
        <h1 className="premium-title">✅ Payment Complete!</h1>
        <p className="premium-subtitle">
            Ads have been removed. Enjoy your Premium experience.
        </p>
        </div>
    );
    }

  return (
  <div className="premium-container">
    <h1 className="premium-title">Go Premium</h1>

    <p className="premium-subtitle">
      Remove ads from TechCart forever.
    </p>

    <form onSubmit={handleSubmit} className="premium-form">
      <input
        className="premium-input"
        name="cardholder"
        placeholder="Cardholder name"
        value={formData.cardholder}
        onChange={handleChange}
      />

      <input
        className="premium-input"
        name="cardNumber"
        placeholder="Card number"
        value={formData.cardNumber}
        onChange={handleChange}
      />

      <div className="premium-row">
        <input
          className="premium-input"
          name="expiry"
          placeholder="Expiry date"
          value={formData.expiry}
          onChange={handleChange}
        />

        <input
          className="premium-input"
          name="cvc"
          placeholder="CVC"
          value={formData.cvc}
          onChange={handleChange}
        />
      </div>

      <input
        className="premium-input"
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <button className="premium-button" type="submit">
        Pay
      </button>
    </form>
  </div>
);
}