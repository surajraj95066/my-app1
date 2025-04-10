import React from 'react';
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-1">VIT, Bhopal, Madhya Pradesh</p>
        <p className="mb-1">Phone number: 79911950xx</p>
        <p className="mb-0">Need help? Contact us!</p>
        <Link to="/Testing" className="nav-link">Testing</Link>
      </div>
    </footer>
  );
}
