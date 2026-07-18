import React from "react";
import School from '../assets/School.jpg';
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";


const Gallery = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: "url('/images/school-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 8%",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "auto",
            background: "#0B5ED7",
            borderRadius: "10px",
            padding: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              Discover Life At <br /> Riverside
            </h1>
          </div>

          <div
            style={{
              flex: 1,
              fontSize: "15px",
              lineHeight: "28px",
            }}
          >
            Excellence in learning through innovation and character
            development. We prepare every student for future success with
            quality education.
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "40px auto",
        padding: "0 15px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#1E40AF",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Recent pictures
      </h2>

      {/* Large Image */}
      <img
        src={images[0]}
        alt="Main"
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
          borderRadius: "6px",
          marginBottom: "20px",
        }}
      />

      {/* Gallery */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>

      {/* CTA Section */}
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

export default Gallery;