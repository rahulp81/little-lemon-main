import React from "react";

export default function CallToAction() {
  return (
    <div className="callToAction-container">
      <div className="callToAction-infoSection">
        <div className="resto-title">Little Lemon</div>
        <div className="resto-location">Chicago</div>
        <div className="resto-info">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </div>
        <button className="reserve-action">Reserve a Table</button>
      </div>
      <img className="signatureDish" alt="signatureDish"></img>
    </div>
  );
}
