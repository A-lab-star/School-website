import React from "react";
import School from "../assets/School.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(254.37deg, rgba(21, 74, 189, 0.5) 2.93%, rgba(62, 146, 204, 0.4) 38.85%, rgba(21, 74, 189, 0.6) 91.25%), url(${School})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        fontFamily: "system-ui, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        paddingTop: "28px",
        color: "#FFFFFF",
      }}
    >
      {/* Header */}
      <header
        style={{
          width: "90%",
          maxWidth: "1280px",
          height: "74px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "54px",
          padding: "0 40px",
          background: "#FFFFFF",
          boxShadow: "0px 18px 39.3px -15px rgba(0,0,0,0.1)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontWeight: "700",
            fontSize: "24px",
            color: "#154ABD",
          }}
        >
          School Logo
        </div>

        <nav
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          {["Home", "About", "News", "Gallery"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              style={{
                textDecoration: "none",
                color: index === 0 ? "#154ABD" : "#555",
                fontWeight: "500",
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          style={{
            background: "#154ABD",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            padding: "12px 24px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Contact Us
        </button>
      </header>

      {/* Hero Section */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "900px",
          padding: "40px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "800",
            lineHeight: "1.2",
            marginBottom: "25px",
          }}
        >
          Welcome To School For The Special Needs,
          <br />
          <span style={{ color: "#FFD700" }}>Iseyin.</span>
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "700px",
            marginBottom: "40px",
          }}
        >
          At School for the Special Needs, Iseyin, we provide an inclusive and
          supportive environment where every learner, regardless of ability,
          can thrive. With modern learning facilities, dedicated special
          educators, and a safe, nurturing atmosphere, we empower our students
          to discover their strengths and achieve their fullest potential.
          We're not just building academic excellence—we're shaping confident,
          independent, and well-rounded individuals ready to face the world.
        </p>

        {/* Search Bar */}
        <div
          style={{
            width: "100%",
            maxWidth: "550px",
            background: "#FFFFFF",
            borderRadius: "50px",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          <input
            type="text"
            placeholder="Search programs, courses or events..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              padding: "12px 20px",
              fontSize: "16px",
              borderRadius: "50px",
            }}
          />

          <button
            style={{
              background: "#3E92CC",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "12px 28px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Search
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;