import React from "react";
import School from "../assets/School.jpg";
import {
  FaEnvelope,
  FaCommentDots,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div style={{ width: "100%", background: "#fff", fontFamily: "Arial, sans-serif" }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${School})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "70px 0 90px",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1180px",
            margin: "0 auto",
            background: "#1E4ED8",
            borderRadius: "12px",
            padding: "45px 50px",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,.15)",
          }}
        >
          <div style={{ width: "45%" }}>
            <span
              style={{
                background: "rgba(255,255,255,.15)",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              Contact Us
            </span>

            <h1
              style={{
                fontSize: "46px",
                margin: "20px 0 0",
                lineHeight: "55px",
              }}
            >
              Chat To Our Friendly Team
            </h1>
          </div>

          <div style={{ width: "42%", fontSize: "15px", lineHeight: "28px" }}>
            We'd love to hear from you. Please fill out this form or shoot us
            an email.
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        style={{
          width: "90%",
          maxWidth: "1180px",
          margin: "60px auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1 }}>
          {/* Email */}
          <div style={{ marginBottom: "40px" }}>
            <FaEnvelope size={20} color="#1E4ED8" />
            <h3 style={{ margin: "10px 0" }}>Email</h3>
            <p style={{ color: "#666", marginBottom: "8px" }}>
              Our friendly team is here to help.
            </p>
            <span style={{ color: "#1E4ED8" }}>
               Specialneedsisy@gmail.com
            </span>
          </div>

          {/* Live Chat */}
          <div style={{ marginBottom: "40px" }}>
            <FaCommentDots size={20} color="#1E4ED8" />
            <h3 style={{ margin: "10px 0" }}>Live Chat</h3>
            <p style={{ color: "#666", marginBottom: "8px" }}>
              Our friendly team is here to help.
            </p>
            <span style={{ color: "#1E4ED8" }}>Start new chat</span>
          </div>

          {/* Address */}
          <div style={{ marginBottom: "40px" }}>
            <FaMapMarkerAlt size={20} color="#1E4ED8" />
            <h3 style={{ margin: "10px 0" }}>School Address</h3>
            <p style={{ color: "#666", marginBottom: "8px" }}>
              Visit our school for additional info.
            </p>
            <span style={{ color: "#1E4ED8" }}>
              Behind Adlak fueling station, shaki Road custom area, Iseyin.
            </span>
          </div>

          {/* Phone */}
          <div>
            <FaPhoneAlt size={20} color="#1E4ED8" />
            <h3 style={{ margin: "10px 0" }}>Phone</h3>
            <p style={{ color: "#666", marginBottom: "8px" }}>
              Mon–Fri from 8am to 5pm.
            </p>
            <span style={{ color: "#1E4ED8" }}>
              +234 8035210108
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            borderRadius: "10px",
            padding: "30px",
            boxShadow: "0 3px 15px rgba(0,0,0,.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <input
              type="text"
              placeholder="First name"
              style={{
                flex: 1,
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                outline: "none",
              }}
            />

            <input
              type="text"
              placeholder="Last name"
              style={{
                flex: 1,
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                outline: "none",
              }}
            />
          </div>

          <input
            type="email"
            placeholder="you@email.com"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              marginBottom: "20px",
              outline: "none",
            }}
          />

          <textarea
            rows="6"
            placeholder="Message"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              resize: "none",
              marginBottom: "20px",
              outline: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <input type="checkbox" />
            <span style={{ fontSize: "13px", color: "#666" }}>
              You agree to our friendly privacy policy.
            </span>
          </div>

          <button
            style={{
              width: "100%",
              padding: "14px",
              background: "#1E4ED8",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
      <div>
      {/* Call To Action Section */}
      <section
        style={{
          backgroundImage: `url(${School})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "340px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        ></div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "#fff",
            maxWidth: "700px",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            Give Your Child the Special Needs Advantage!
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "28px",
              marginBottom: "30px",
              color: "#ddd",
            }}
          >
            Enroll your child at Iseyin Special Needs School today. We provide
            academic excellence, character development and opportunities for
            every child to thrive in a supportive learning environment.
          </p>

          <button
            style={{
              background: "#2155F5",
              color: "#fff",
              border: "none",
              padding: "14px 32px",
              borderRadius: "30px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Contact us for admission process →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#071A4B",
          color: "#fff",
          padding: "55px 70px 25px",
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "30px",
            marginBottom: "45px",
          }}
        >
          {/* Left */}
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "32px",
                fontWeight: "600",
              }}
            >
              School for the Special Needs, Iseyin
            </h2>

            <div
              style={{
                display: "flex",
                gap: "22px",
                marginTop: "18px",
                fontSize: "15px",
              }}
            >
              <span style={{ cursor: "pointer" }}>About us</span>
              <span style={{ cursor: "pointer" }}>News</span>
              <span style={{ cursor: "pointer" }}>Gallery</span>
              <span style={{ cursor: "pointer" }}>Contact us</span>
            </div>
          </div>

          {/* Newsletter */}
          <div style={{ minWidth: "360px" }}>
            <p
              style={{
                marginBottom: "12px",
                color: "#d5d5d5",
              }}
            >
              Stay updated. Subscribe to our newsletter today.
            </p>

            <div
              style={{
                display: "flex",
                background: "#fff",
                borderRadius: "30px",
                overflow: "hidden",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "15px 20px",
                  fontSize: "14px",
                }}
              />

              <button
                style={{
                  background: "#fff",
                  border: "none",
                  padding: "0 25px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr
          style={{
            border: "1px solid rgba(255,255,255,.15)",
            marginBottom: "25px",
          }}
        />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: "13px",
            color: "#d3d3d3",
          }}
        >
          <p style={{ margin: 0 }}>
            © 2025 SchoolBridge. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <span style={{ cursor: "pointer" }}>Privacy Policy</span>
            <span style={{ cursor: "pointer" }}>Terms of Service</span>
            <span style={{ cursor: "pointer" }}>Cookies Settings</span>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default ContactUs;