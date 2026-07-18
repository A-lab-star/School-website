import School from '../assets/School.jpg';
import MissionImg from "../assets/mission.png";
import VisionImg from "../assets/vision.jpg";
import Principal from "../assets/principal.png";
import Founder from "../assets/founder.png";
import VicePrincipal from "../assets/vice-principal.png";
import Bursar from "../assets/burser.png";
import Teacher1 from "../assets/teacher1.png";
import Teacher2 from "../assets/teacher2.png";
import Teacher3 from "../assets/teacher3.png";
import Teacher4 from "../assets/teacher4.png";
import Teacher5 from "../assets/teacher5.png";
import Teacher6 from "../assets/teacher6.png";

import Trophy1 from "../assets/trophy1.png";
import Trophy2 from "../assets/trophy2.png";
import Trophy3 from "../assets/trophy3.png";
import Trophy4 from "../assets/trophy4.png";
import Trophy5 from "../assets/trophy5.png";

import Parent1 from "../assets/parent1.png";
import Parent2 from "../assets/parent2.png";
import Parent3 from "../assets/parent3.png";
import Parent4 from "../assets/parent1.png";

const testimonials = [
  {
    image: Parent1,
    name: "Mrs. Oladime",
    role: "Parent",
    text: `"Riverside has been a blessing to our family. My daughter has grown academically and emotionally since joining. The teachers are not just instructors but true mentors who genuinely care about the students."`,
  },
  {
    image: Parent2,
    name: "Mrs. Aderemi",
    role: "Parent",
    text: `"What stands out for me is the safe and supportive environment. As a parent, I have peace of mind knowing my child is not only learning but also protected from negative influences like bullying."`,
  },
  {
    image: Parent3,
    name: "Tolu F.",
    role: "Class of 2023",
    text: `"Riverside gave me more than just academics—it gave me discipline, leadership, and confidence. The support from teachers and the school community made my transition abroad much smoother."`,
  },
  {
    image: Parent4,
    name: "Mrs. Johnson",
    role: "Parent",
    text: `"My son has flourished since joining Riverside. The school has instilled discipline, excellence, and confidence that will remain with him for the future."`,
  },
];


const awards = [
  {
    year: "2019",
    title: "Best Performing Secondary School (State Level)",
    description:
      "Recognized for outstanding results in WAEC and NECO examinations.",
    image: Trophy1,
    featured: true,
  },
  {
    year: "2018",
    title: "Cultural Excellence Award",
    description:
      "Winners of the State Drama and Debate Championship.",
    image: Trophy2,
    featured: true,
  },
  {
    year: "2017",
    title: "Sports Champions",
    description:
      "Secured 1st place in the Inter-School Football and Athletics Competition.",
    image: Trophy3,
    featured: false,
  },
  {
    year: "2018",
    title: "STEM Innovation Award",
    description:
      "Students won national recognition for a science project on renewable energy.",
    image: Trophy4,
    featured: false,
  },
  {
    year: "2019",
    title: "Literacy Excellence",
    description:
      "Secured first place in the Inter-School Poetry and Art Festival.",
    image: Trophy5,
    featured: false,
  },
];

const staff = [
  {
    image: Founder,
    name: "Dr. Adebowale Johnson",
    position: "Executive Founder",
  },
  {
    image: Principal,
    name: "Mrs. Lydia Omotosho",
    position: "Principal",
  },
  {
    image: VicePrincipal,
    name: "Mr. Adebayo Adeleke",
    position: "Vice Principal",
  },
  {
    image: Bursar,
    name: "Mrs. Sola Oluwale",
    position: "Bursar",
  },
  {
    image: Teacher1,
    name: "Mrs. Rose Oladele",
    position: "English Teacher",
  },
  {
    image: Teacher2,
    name: "Mr. Richard Odunayo",
    position: "Mathematics Teacher",
  },
  {
    image: Teacher3,
    name: "Mrs. Tomiwa Akinola",
    position: "Chemistry Teacher",
  },
  {
    image: Teacher4,
    name: "Mr. Ayomide Olorunfemi",
    position: "Physics Teacher",
  },
  {
    image: Teacher5,
    name: "Mr. Charles Adeyemi",
    position: "Economics Teacher",
  },
  {
    image: Teacher6,
    name: "Mr. Adewunmi Olatunji",
    position: "Government Teacher",
  },
];

const About = () => {
  return (
    <div>
        <div>
            <div style={{width: 1440,
height: 662,
angle: '0 deg',
opacity: 1,
background: '#0000004D'
}}>
        
      <div style={{
        width: 1440,
height: 540,
gap: '64px',
angle: '0 deg',
opacity: 1,
top: '122px',
padding: '80px',
      }}>
        <div style={{
            width: 1280,
height: 352,
borderRadius: '20px',
gap: '24px',
angle: '0 deg',
opacity: 1,
padding: '32px',
background: 'var(--primary-color, #154ABD)',
boxShadow: '0px 24px 48px -12px #1018282E',
        }}>
            <p style={{width: 69,
height: 24,
angle: '0 deg',
opacity: 1,
fontFamily: 'Geist',
fontWeight: 400,
fontStyle: 'Regular',
fontSize: '16px',
leadingTrim: 'NONE',
lineHeight: '24px',
letterSpacing: '0%',
color: '#FFFFFF',
width: 93,
height: 40,
borderRadius: '32px',
paddingTop: '8px',
paddingRight: '12px',
paddingBottom: '8px',
paddingLeft: '12px',
gap: '10px',
angle: '0 deg',
opacity: 1,
borderWidth: '1px',
background: 'var(--secondary-color, #3E92CC)',
border: '1px solid var(--primary-300, #5579C7)',
boxShadow: '0px 8px 8px -4px #10182808',
boxShadow: '0px 20px 24px -4px #10182814',
}}>Overview</p>
        <div style={{width: 1216,
height: 224,
gap: '24px',
angle: '0 deg',
opacity: 1,
}}>
            <h1 style={{width: 596,
height: 156,
angle: '0 deg',
opacity: 1,
fontFamily: 'Geist',
fontWeight: 600,
fontStyle: 'SemiBold',
fontSize: '60px',
leadingTrim: 'NONE',
lineHeight: '130%',
letterSpacing: '0%',
textTransform: 'capitalize',
color: '#FFFEFE',
}}>About School for the Special Needs</h1>
                <p style={{width: 596,
height: 224,
angle: '0 deg',
opacity: 1,
fontFamily: 'Geist',
fontWeight: 400,
fontStyle: 'Regular',
fontSize: '20px',
leadingTrim: 'NONE',
lineHeight: '28px',
letterSpacing: '2%',
color: '#FFFFFF',
}}>School for the Special Needs, Iseyin is a government-approved special education institution dedicated to supporting learners with visual, hearing, and intellectual impairments. We provide an inclusive, nurturing environment where every child receives individualized attention to learn, grow, and thrive. With trained special educators, adaptive learning tools, and life skills programs, we empower our students to achieve independence, confidence, and success in academics and daily living.</p>
        </div>
        </div>
      </div>
            </div>
            
            <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "70px 40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
      }}
    >
      {/* Mission Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "60px",
          marginBottom: "80px",
          flexWrap: "wrap",
        }}
      >
        {/* Left */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2
            style={{
              fontSize: "34px",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#111827",
            }}
          >
            Mission
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "30px",
              color: "#6B7280",
            }}
          >
            To provide inclusive, high-quality education and holistic support
            for learners with diverse special needs. We are committed to
            nurturing each child’s unique abilities, promoting independence,
            confidence, and life skills, while fostering social, emotional, and
            academic growth in a safe and supportive environment.
          </p>
        </div>

        {/* Right */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-18px",
              left: "35px",
              background: "#1D4ED8",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "20px",
              fontSize: "13px",
            }}
          >
            Mission & Vision
          </div>

          <div
            style={{
              background: "#2563EB",
              padding: "10px",
              borderRadius: "10px",
              width: "360px",
            }}
          >
            <img
              src={MissionImg}
              alt="Mission"
              style={{
                width: "100%",
                display: "block",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Vision Section */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "60px",
          marginBottom: "90px",
          flexWrap: "wrap-reverse",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            minWidth: "300px",
          }}
        >
          <div
            style={{
              background: "#38BDF8",
              padding: "10px",
              borderRadius: "10px",
              width: "360px",
            }}
          >
            <img
              src={VisionImg}
              alt="Vision"
              style={{
                width: 525,
height: 291,
borderRadius: '8px',
angle: '0 deg',
opacity: 1,
top: '24px',
left: '8px',

              }}
            />
          </div>
        </div>

        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2
            style={{
              fontSize: "34px",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#111827",
            }}
          >
            Vision
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "30px",
              color: "#6B7280",
            }}
          >
            To be a center of excellence in special education, recognized for
            empowering every learner to reach their full potential. We envision
            a community where all children with special needs are valued,
            included, and equipped to become confident, resourceful, and
            contributing members of society.
          </p>
        </div>
      </div>

      {/* Principles */}

      <div>
        <div
          style={{
            display: "inline-block",
            background: "#1D4ED8",
            color: "#fff",
            padding: "8px 18px",
            borderRadius: "20px",
            fontSize: "13px",
            marginBottom: "20px",
          }}
        >
          Our Core Values
        </div>

        <h2
          style={{
            fontSize: "42px",
            marginBottom: "15px",
            color: "#111827",
          }}
        >
          The Principles That Define Us
        </h2>

        <p
          style={{
            color: "#6B7280",
            lineHeight: "30px",
            marginBottom: "40px",
            maxWidth: "900px",
          }}
        >
          School for the Special Needs (SSN), our values guide every aspect of
          school life. We uphold integrity, empathy, excellence, respect, and
          inclusivity as the foundation of our community.
        </p>

        {/* Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              title: "Integrity",
              color: "#1D4ED8",
              text: "We foster honesty and strong moral principles in every aspect of school life.",
              white: true,
            },
            {
              title: "Respect",
              color: "#1D4ED8",
              text: "We nurture a culture of kindness, inclusivity, and appreciation for diversity.",
              white: true,
            },
            {
              title: "Excellence",
              color: "#fff",
              text: "We pursue the highest standards in academics, character, and personal growth.",
            },
            {
              title: "Discipline",
              color: "#fff",
              text: "We instill responsibility, focus, and self-control to prepare students for success.",
            },
            {
              title: "Innovation",
              color: "#fff",
              text: "We encourage creativity, collaboration, and forward-thinking in all learners.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: item.color,
                color: item.white ? "#fff" : "#111827",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 5px 18px rgba(0,0,0,.08)",
                border: item.white ? "none" : "1px solid #E5E7EB",
              }}
            >
              <h3
                style={{
                  marginBottom: "15px",
                  fontSize: "24px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  lineHeight: "28px",
                  color: item.white ? "#E5E7EB" : "#6B7280",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

     <div
      style={{
        width: "100%",
        background: "#F8F9FC",
        padding: "80px 40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top Blue Line */}
      <div
        style={{
          width: "180px",
          height: "4px",
          marginBottom: "50px",
        }}
      ></div>

      {/* Header */}

      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 50px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#1D4ED8",
            color: "#fff",
            padding: "7px 18px",
            borderRadius: "20px",
            fontSize: "12px",
            marginBottom: "20px",
          }}
        >
          Our Team
        </div>

        <h2
          style={{
            fontSize: "42px",
            color: "#111827",
            marginBottom: "20px",
          }}
        >
          Our World class professionals
        </h2>

        <p
          style={{
            color: "#6B7280",
            lineHeight: "28px",
            fontSize: "15px",
          }}
        >
          Behind every success at School for the Special Needs lies a team of
          compassionate and skilled professionals. Our dedicated educators,
          therapists, and support staff work together to provide personalized
          care, guidance, and learning experiences for every child.
        </p>
      </div>

      {/* Staff Cards */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
        }}
      >
        {staff.map((member, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 5px 18px rgba(0,0,0,.08)",
              transition: ".3s",
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3
                style={{
                  margin: "0",
                  fontSize: "16px",
                  color: "#111827",
                }}
              >
                {member.name}
              </h3>

              <p
                style={{
                  marginTop: "8px",
                  color: "#2563EB",
                  fontSize: "13px",
                }}
              >
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>

    <div
      style={{
        background: "#F8FAFC",
        padding: "80px 40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Badge */}

      <div
        style={{
          display: "inline-block",
          background: "#2563EB",
          color: "#fff",
          padding: "8px 18px",
          borderRadius: "20px",
          fontSize: "12px",
          marginBottom: "20px",
        }}
      >
        Achievements & Awards
      </div>

      {/* Heading */}

      <h2
        style={{
          fontSize: "42px",
          color: "#111827",
          margin: "0 0 15px",
          fontWeight: "700",
        }}
      >
        Celebrating Success, Honoring Dedication
      </h2>

      <p
        style={{
          maxWidth: "1000px",
          color: "#6B7280",
          lineHeight: "28px",
          marginBottom: "40px",
        }}
      >
        Over the years, Riverside has consistently recorded outstanding results
        in national and international examinations. Our students have won
        competitions in debates, sports, science fairs, and cultural events,
        bringing pride to the school community. Alumni have gone on to excel in
        universities across Nigeria and abroad, reflecting the strong
        foundation they received here.
      </p>

      {/* Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {awards.map((award, index) => (
          <div
            key={index}
            style={{
              background: award.featured ? "#1D4ED8" : "#fff",
              color: award.featured ? "#fff" : "#111827",
              borderRadius: "10px",
              padding: "20px",
              minHeight: "230px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 5px 18px rgba(0,0,0,.08)",
              border: award.featured
                ? "none"
                : "1px solid #E5E7EB",
            }}
          >
            {/* Year */}

            <div
              style={{
                display: "inline-block",
                width: "fit-content",
                padding: "6px 15px",
                borderRadius: "20px",
                background: award.featured ? "#fff" : "#0F5132",
                color: award.featured ? "#1D4ED8" : "#fff",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {award.year}
            </div>

            {/* Title */}

            <h3
              style={{
                fontSize: "22px",
                margin: "18px 0 12px",
                lineHeight: "30px",
              }}
            >
              {award.title}
            </h3>

            {/* Description */}

            <p
              style={{
                color: award.featured ? "#E5E7EB" : "#6B7280",
                lineHeight: "24px",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              {award.description}
            </p>

            {/* Image */}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                src={award.image}
                alt={award.title}
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

     <div
      style={{
        padding: "80px 40px",
        background: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <span
          style={{
            background: "#2563EB",
            color: "#fff",
            padding: "8px 18px",
            borderRadius: "20px",
            fontSize: "12px",
          }}
        >
          Success Stories
        </span>

        <h2
          style={{
            marginTop: "20px",
            fontSize: "40px",
            color: "#111827",
          }}
        >
          Hear from the voices we trust.
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "15px auto 0",
            color: "#6B7280",
            lineHeight: "28px",
          }}
        >
          Our community speaks for us. Hear from parents, students, and alumni
          who have experienced the Riverside difference. Their stories reflect
          the impact of our commitment to excellence, character development, and
          lifelong success.
        </p>
      </div>

      {/* Cards */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "20px",
          scrollbarWidth: "none",
        }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            style={{
              minWidth: "320px",
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              padding: "25px",
              boxShadow: "0 4px 12px rgba(0,0,0,.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Testimonial */}

            <p
              style={{
                color: "#374151",
                lineHeight: "28px",
                fontSize: "15px",
                minHeight: "170px",
              }}
            >
              {item.text}
            </p>

            {/* Stars */}

            <div
              style={{
                color: "#1D4ED8",
                fontSize: "18px",
                margin: "15px 0",
              }}
            >
              ★★★★★
            </div>

            {/* User */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: "12px",
                }}
              />

              <div>
                <h4
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    color: "#111827",
                  }}
                >
                  {item.name}
                </h4>

                <span
                  style={{
                    color: "#6B7280",
                    fontSize: "13px",
                  }}
                >
                  {item.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "25px",
        }}
      >
        <button
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #D1D5DB",
            background: "#fff",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          ←
        </button>

        <button
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #D1D5DB",
            background: "#fff",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          →
        </button>
      </div>
    </div>
     <>
      
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${School})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "6px 18px",
              border: "1px solid rgba(255,255,255,.5)",
              borderRadius: "20px",
              fontSize: "12px",
              marginBottom: "18px",
            }}
          >
            Admission
          </span>

          <h2
            style={{
              fontSize: "42px",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Give Your Child the Special Needs Advantage
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "28px",
              color: "#E5E7EB",
              marginBottom: "30px",
            }}
          >
            Enroll your child at School for the Special Needs, Iseyin where care meets excellence. We offer quality special education, a supportive community, and opportunities for every learner to grow, thrive, and shine. Admission is now open for the upcoming session!
          </p>

          <button
            style={{
              background: "#2563EB",
              color: "#fff",
              width: 331.07110595703125,
              height: 52,
              borderRadius: '50px',
              paddingTop: '11px',
              paddingRight: '20px',
              paddingBottom: '11px',
              paddingLeft: '20px',
              gap: '10px',
              angle: '0 deg',
              opacity: 1,

            }}
          >
            Contact Us for Admission Process →
          </button>
        </div>
      </div>

      

      <footer
        style={{
          background: "#081A4B",
          color: "#fff",
          padding: "60px 50px 25px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
            borderBottom: "1px solid rgba(255,255,255,.15)",
            paddingBottom: "35px",
          }}
        >
          {/* Left */}

          <div style={{ flex: 1, minWidth: "260px" }}>
            <h2
              style={{
                marginBottom: "15px",
                fontSize: "28px",
              }}
            >
              School for the Special Needs, Iseyin
            </h2>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px",
                fontSize: "14px",
              }}
            >
              <a
                href="#"
                style={{ color: "#BFC8E8", textDecoration: "none" }}
              >
                About Us
              </a>

              <a
                href="#"
                style={{ color: "#BFC8E8", textDecoration: "none" }}
              >
                News
              </a>

              <a
                href="#"
                style={{ color: "#BFC8E8", textDecoration: "none" }}
              >
                Gallery
              </a>

              <a
                href="#"
                style={{ color: "#BFC8E8", textDecoration: "none" }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Newsletter */}

          <div style={{ flex: 1, minWidth: "320px" }}>
            <h3
              style={{
                marginBottom: "20px",
                fontWeight: "500",
              }}
            >
              Stay updated. Subscribe to our newsletter today.
            </h3>

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
                  padding: "15px 18px",
                  fontSize: "14px",
                }}
              />

              <button
                style={{
                  background: "#fff",
                  color: "#111827",
                  border: "none",
                  padding: "0 25px",
                  cursor: "pointer",
                  fontWeight: "600",
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
            marginTop: "25px",
            color: "#C7D2FE",
            fontSize: "13px",
          }}
        >
          <p style={{ margin: 0 }}>
            © 2025 SchoolforIseyin. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#C7D2FE",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>

            <a
              href="#"
              style={{
                color: "#C7D2FE",
                textDecoration: "none",
              }}
            >
              Terms of Service
            </a>

            <a
              href="#"
              style={{
                color: "#C7D2FE",
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
    </div>
  )
}

export default About