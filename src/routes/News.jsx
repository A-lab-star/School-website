import React from "react";
import School from '../assets/School.jpg';
import HeroImage from "../assets/graduation.png";
import News1 from "../assets/news1.jpg";
import News2 from "../assets/news2.png";
import News3 from "../assets/news2.png";
import News4 from "../assets/news4.jpg";
import News5 from "../assets/news5.jpg";
import News6 from "../assets/news6.jpg";

const news = [
  {
    image: News1,
    category: "Innovation",
    color: "#F97316",
    title: "New Science Laboratory Commissioned",
    desc: "Riverside Secondary School recently commissioned a state-of-the-art science laboratory equipped with modern facilities for Physics, Chemistry and Biology practicals.",
    author: "Dr. Omowumi Sharan",
    date: "Posted: Aug 27, 2025",
  },
  {
    image: News2,
    category: "Sports",
    color: "#16A34A",
    title: "Inter-House Sports Competition 2025",
    desc: "The annual Inter-House Sports Festival showcased athletic excellence, teamwork, and healthy competition among students.",
    author: "Omowumi Sharan",
    date: "Posted: Aug 25, 2025",
  },
  {
    image: News3,
    category: "Sports",
    color: "#16A34A",
    title: "Blue House Wins 2025 Inter-House Sports Festival",
    desc: "The prestigious event ended with Blue House lifting the championship trophy after outstanding performances.",
    author: "Omowumi Sharan",
    date: "Posted: Aug 21, 2025",
  },
  {
    image: News4,
    category: "Encouraging",
    color: "#8B5CF6",
    title: "Seamless Onboarding: Making the Shift to School Bridge Stress-Free",
    desc: "Starting a new school is never easy. Here's how Riverside ensures every student settles in quickly.",
    author: "Omowumi Sharan",
    date: "Posted: Aug 21, 2025",
  },
  {
    image: News5,
    category: "Competition",
    color: "#22C55E",
    title: "Why School Bridge Outshines Competitors Like Klasify",
    desc: "Not all school management software is built the same. Discover what makes School Bridge different.",
    author: "Omowumi Sharan",
    date: "Posted: July 27, 2025",
  },
  {
    image: News6,
    category: "Feedback",
    color: "#06B6D4",
    title: "The Power of Weekly Remarks and Feedback in Student Success",
    desc: "Consistent feedback shapes academic achievement through communication between teachers and parents.",
    author: "Omowumi Sharan",
    date: "Posted: July 21, 2025",
  },
];

const News = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#f7f7f7",
        fontFamily: "Arial, sans-serif",
      }}
    >

      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url('https://images.unsplash.com/photo-1562774053-701939374585?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "25px 60px 80px",
          borderTop: "3px solid #0F6FFF",
        }}
      >
        


        <div
          style={{
            background: "#1D4ED8",
            borderRadius: "10px",
            color: "#fff",
            padding: "45px",
            display: "flex",
            justifyContent: "space-between",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "320px" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,.15)",
                padding: "7px 16px",
                borderRadius: "20px",
                fontSize: "12px",
                marginBottom: "20px",
              }}
            >
              News & Announcement
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "56px",
                lineHeight: "68px",
                fontWeight: "700",
              }}
            >
              What's Happening
              <br />
              At School For The
              <br />
              Special Needs, Iseyin
            </h1>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: "320px",
              fontSize: "16px",
              lineHeight: "32px",
              color: "#E5E7EB",
              display: "flex",
              alignItems: "center",
            }}
          >
            At School for the Special Needs, Iseyin, we provide an
            inclusive and supportive environment where every learner's
            potential is nurtured. From modern learning facilities,
            dedicated special educators, and a safe, nurturing atmosphere,
            our campus is designed to encourage the strengths of each child
            while fostering growth and independence.
          </div>
        </div>
      </div>


      <div
        style={{
          maxWidth: "1250px",
          margin: "60px auto",
          background: "#fff",
          borderRadius: "10px",
          display: "flex",
          gap: "35px",
          padding: "25px",
          boxShadow: "0 5px 20px rgba(0,0,0,.08)",
          flexWrap: "wrap",
        }}
      >

        <div style={{ flex: 1, minWidth: "350px" }}>
          <img
            src={HeroImage}
            alt=""
            style={{
              width: "100%",
              borderRadius: "8px",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* CONTENT */}

        <div
          style={{
            flex: 1,
            minWidth: "350px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "25px",
            }}
          >
            <span
              style={{
                color: "#A855F7",
                fontWeight: "600",
              }}
            >
              Events
            </span>

            <span
              style={{
                fontWeight: "600",
              }}
            >
              Read full story
            </span>
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "38px",
              color: "#111827",
            }}
          >
            Riverside Students Excel in WAEC 2025
          </h2>

          <p
            style={{
              color: "#6B7280",
              lineHeight: "30px",
              marginTop: "20px",
            }}
          >
            Riverside School celebrates another remarkable achievement as
            our students record exceptional performances in the 2025 WAEC
            examinations. This accomplishment reflects years of dedicated
            teaching, disciplined learning, and strong parental support.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "auto",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "#ddd",
                }}
              ></div>

              <div>
                <div
                  style={{
                    fontWeight: "600",
                  }}
                >
                  Honorable Father Afolabi
                </div>

                <small
                  style={{
                    color: "#6B7280",
                  }}
                >
                  Author
                </small>
              </div>
            </div>

            <span
              style={{
                color: "#6B7280",
              }}
            >
              Posted: Aug 26, 2025
            </span>
          </div>
        </div>
      </div>
      <div
      style={{
        maxWidth: "1250px",
        margin: "60px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "28px",
        }}
      >
        {news.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "22px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "18px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                <span style={{ color: item.color }}>{item.category}</span>

                <span style={{ color: "#111827" }}>
                  Read full story
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  margin: 0,
                  fontSize: "30px",
                  lineHeight: "38px",
                  color: "#111827",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#6B7280",
                  lineHeight: "28px",
                  marginTop: "16px",
                  fontSize: "15px",
                }}
              >
                {item.desc}
              </p>

              {/* Footer */}
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "#D1D5DB",
                    }}
                  ></div>

                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {item.author}
                    </div>

                    <small style={{ color: "#9CA3AF" }}>
                      Author
                    </small>
                  </div>
                </div>

                <small
                  style={{
                    color: "#6B7280",
                  }}
                >
                  {item.date}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "45px",
          gap: "8px",
        }}
      >
        {["← Previous", "1", "2", "3", "4", "5", "Next →"].map(
          (item, index) => (
            <button
              key={index}
              style={{
                padding: "10px 16px",
                border: "1px solid #D1D5DB",
                background: item === "1" ? "#2563EB" : "#fff",
                color: item === "1" ? "#fff" : "#374151",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>

     <>
      {/* CTA Section */}
      <div
        style={{
          width: "100%",
          height: "320px",
          backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${School})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <div style={{ maxWidth: "750px", color: "#fff" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "36px",
              fontWeight: "600",
            }}
          >
            Enroll for the Next Academic Session Now
          </h2>

          <p
            style={{
              marginTop: "18px",
              fontSize: "15px",
              lineHeight: "28px",
              color: "#E5E7EB",
            }}
          >
            Give your child the Riverside advantage where academic excellence,
            creativity, and opportunities to thrive come together.
          </p>

          <button
            style={{
              marginTop: "25px",
              background: "#0C7A4B",
              color: "#fff",
              border: "none",
              padding: "14px 28px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Contact us for admission process →
          </button>
        </div>
      </div>

      <footer
        style={{
          background: "#062618",
          color: "#fff",
          padding: "45px 55px 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "40px",
            paddingBottom: "30px",
            borderBottom: "1px solid rgba(255,255,255,.15)",
          }}
        >
          <div style={{ minWidth: "260px" }}>
            <h2
              style={{
                margin: 0,
                fontSize: "34px",
                fontWeight: "600",
              }}
            >
              Riverside school
            </h2>

            <div
              style={{
                display: "flex",
                gap: "25px",
                marginTop: "25px",
                fontSize: "14px",
              }}
            >
              <a
                href="#"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                }}
              >
                About us
              </a>

              <a
                href="#"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                }}
              >
                News
              </a>

              <a
                href="#"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                }}
              >
                Gallery
              </a>

              <a
                href="#"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                }}
              >
                Contact us
              </a>
            </div>
          </div>

          <div style={{ minWidth: "420px" }}>
            <p
              style={{
                marginBottom: "15px",
                color: "#F3F4F6",
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
                width: "100%",
                maxWidth: "520px",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "14px 18px",
                  fontSize: "14px",
                }}
              />

              <button
                style={{
                  background: "#fff",
                  border: "none",
                  padding: "0 30px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "20px",
            fontSize: "13px",
            color: "#D1D5DB",
          }}
        >
          <p style={{ margin: 0 }}>
            © 2025 Riverside. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              gap: "25px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#D1D5DB",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>

            <a
              href="#"
              style={{
                color: "#D1D5DB",
                textDecoration: "none",
              }}
            >
              Terms of Service
            </a>

            <a
              href="#"
              style={{
                color: "#D1D5DB",
                textDecoration: "none",
              }}
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </footer>
    </>
    </div>
  );
};

export default News;