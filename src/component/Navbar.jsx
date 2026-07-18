import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          width: "98%",
          maxWidth: "1400px",
          height: "50px",
          background: '#FEFEFE',
          borderRadius: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          boxSizing: "border-box",
          boxShadow: "0 0 4px rgba(0,0,0,0.15)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: 'Geist',
fontWeight: 700,
fontStyle: 'Bold',
fontSize: '24px',
leadingTrim: 'NONE',
lineHeight: '100%',
letterSpacing: '0%',
color: '#000000',
          }}
        >
          School Logo
        </div>

        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "35px",
            fontSize: "13px",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#222",
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "#222",
            }}
          >
            About
          </Link>

          <Link
            to="/news"
            style={{
              textDecoration: "none",
              color: "#222",
            }}
          >
            News
          </Link>

          <Link
            to="/gallery"
            style={{
              textDecoration: "none",
              color: "#222",
            }}
          >
            Gallery
          </Link>
        </div>

        
        <Link
          to="/contact"
          style={{
            backgroundColor: "#1D4ED8",
            color: "#fff",
            borderRadius: "25px",
            padding: "10px 22px",
            fontSize: "13px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Contact Us
          <span
            style={{
              width: "18px",
              height: "18px",
              border: "1px solid rgba(255,255,255,0.5)",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "11px",
            }}
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;