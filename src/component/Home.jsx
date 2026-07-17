import React from "react";
import School from "../assets/School.jpg";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import lecturer from "../assets/lecturer.jpg"
import News1 from "../assets/student1.jpg";
import News2 from "../assets/student2.jpg";
import News3 from "../assets/student3.png";
import Parent1 from "../assets/parent1.png";
import Parent2 from "../assets/parent2.png";
import Parent3 from "../assets/parent3.png";
import Parent4 from "../assets/parent1.png";
import Gallery1 from "../assets/gallery1.jpg";
import Gallery2 from "../assets/gallery2.png";
import Gallery3 from "../assets/gallery3.jpg";

const Home = () => {

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

  const cards = [
    {
      image: Img1,
      title: "Personalized Learning for Every Child",
      text: "We believe every child deserves a learning environment that meets their unique needs through individualized education.",
    },
    {
      image: Img2,
      title: "Supportive and Inclusive Environment",
      text: "Our school is safe, caring and inclusive where every student feels valued and encouraged to reach their potential.",
    },
    {
      image: Img3,
      title: "Holistic Development and Life Skills",
      text: "Beyond academics, we focus on building confidence, communication and leadership skills for lifelong success.",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <div style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${School})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "25px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}>
        <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          height: "60px",
          backgroundColor: "#fff",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 25px",
          boxSizing: "border-box",
        }}
      >
        <h4
          style={{
            margin: 0,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          School Logo
        </h4>

        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <a href="#" style={{ textDecoration: "none", color: "#000", fontSize: "14px" }}>
            Home
          </a>

          <a href="#" style={{ textDecoration: "none", color: "#000", fontSize: "14px" }}>
            About
          </a>

          <a href="#" style={{ textDecoration: "none", color: "#000", fontSize: "14px" }}>
            News
          </a>

          <a href="#" style={{ textDecoration: "none", color: "#000", fontSize: "14px" }}>
            Gallery
          </a>
        </div>

        <button
          style={{
            background: "#1E4ED8",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Contact Us →
        </button>
      </div>

      {/* Hero */}
      <div
        style={{
          maxWidth: "700px",
          margin: "70px auto 0 0",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            fontWeight: "700",
            lineHeight: "1.2",
            marginBottom: "20px",
          }}
        >
          Welcome To School For The Special Needs,
          <span style={{ color: "#FFD700" }}> Iseyin.</span>
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "28px",
            color: "#ddd",
            marginBottom: "30px",
          }}
        >
          At School for the Special Needs, Iseyin, we provide an inclusive and
          supportive environment where every learner is empowered to achieve
          their full potential. With modern learning facilities, dedicated
          teachers and a safe nurturing atmosphere, we inspire confidence,
          independence and lifelong success.
        </p>

        <button
          style={{
            background: "#1E4ED8",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            padding: "15px 30px",
            cursor: "pointer",
            fontSize: "15px",
            marginBottom: "60px",
          }}
        >
          Contact us for admission process →
        </button>
      </div>

      {/* Cards */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "rgba(0,0,0,.45)",
              backdropFilter: "blur(8px)",
              borderRadius: "18px",
              overflow: "hidden",
            }}
          >
            <img
              src={card.image}
              alt=""
              style={{
                width: 420,
                height: 400,
                angle: '0 deg',
                opacity: 1,
                borderRadius: '20px',

              }}
            />

            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#ddd",
                  lineHeight: "26px",
                  fontSize: "15px",
                }}
              >
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
      
      <div
  style={{
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "60px",
    boxSizing: "border-box",
  }}
>
  {/* Left Side */}
  <div
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }}
  >
    <button
      style={{
        width: "120px",
        height: "40px",
        borderRadius: "64px",
        border: "1px solid #3E92CC",
        background: "#FFFFFF",
        color: "#3E92CC",
        cursor: "pointer",
      }}
    >
      About Us
    </button>

    <h2
      style={{
        fontSize: "48px",
        fontWeight: "600",
        color: "#0F0004",
        lineHeight: "60px",
        margin: 0,
      }}
    >
      Know more about Special Needs, Iseyin
    </h2>

    <p
      style={{
        fontSize: "16px",
        lineHeight: "28px",
        color: "#423D3E",
      }}
    >
      At School for the Special Needs, Iseyin, we are dedicated to nurturing
      every child's unique abilities through inclusive education, care and
      support. With trained special educators, adaptive learning resources and
      a safe, welcoming environment, we help students grow in confidence,
      independence and skill.
    </p>

    <button
      style={{
        width: "140px",
        height: "52px",
        borderRadius: "50px",
        border: "none",
        background: "#154ABD",
        color: "#FFFFFF",
        cursor: "pointer",
        fontWeight: "600",
      }}
    >
      Learn More
    </button>
  </div>

  {/* Right Side */}
  <div
    style={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: 490,
        height: 417,
        borderTopleftRadius: '20px',
        borderBottomLeftRadius: '20px',
        angle: '0 deg',
        opacity: 1,
        background: 'var(--secondary-color, #3E92CC)',

      }}

    >
      <img
        src={Img1}
        alt="About"
        style={{
         width: 525,
        height: 369,
        top: '24px',
        left: '24px',
        angle: '0 deg',
        opacity: 1,
        borderRadius: '20px',
        paddingTop: '24px',
        paddingRight: '16px',
        paddingBottom: '24px',
        paddingLeft: '16px',
        gap: '10px',

        }}
      />
    </div>
  </div>
</div>

         <div
      style={{
        width: "100%",
        padding: "80px",
        boxSizing: "border-box",
        background: "#FFFFFF",
      }}
    >
      
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <button
          style={{
            padding: "10px 25px",
            border: "none",
            borderRadius: "30px",
            background: "#154ABD",
            color: "#FFFFFF",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Academic Programs
        </button>

        <h2
          style={{
            fontSize: "42px",
            marginTop: "20px",
            color: "#111827",
            fontWeight: "700",
          }}
        >
          Programs we offer that showcase our Academic Excellence
        </h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "20px auto",
            color: "#666",
            lineHeight: "28px",
          }}
        >
          School for the Special Needs, Iseyin offers an inclusive curriculum
          designed to meet the diverse learning needs of every student.
        </p>
      </div>

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "45% 55%",
          columnGap: "40px",
          alignItems: "start",
        }}
      >
        
        <img
          src={lecturer}
          alt=""
          style={{
            width: "100%",
            height: "520px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        {/* Right Text */}
        <div>
          <div style={{ marginBottom: "35px" }}>
            <h3 style={{ color: "#101828" }}>
              Certified Examination Centre
            </h3>
            <p style={{ color: "#555", lineHeight: "28px" }}>
              School for the Special Needs, Iseyin is a certified examination centre approved by the Oyo State Government. This recognition allows our students to take their assessments and external examinations within the school, in a familiar and supportive environment that enhances comfort, confidence, and performance.
            </p>
          </div>

          <div style={{ marginBottom: "35px" }}>
            <h3 style={{ color: "#101828" }}>
              Non-Academic Activities
            </h3>
            <p style={{ color: "#555", lineHeight: "28px" }}>
              At School for the Special Needs, Iseyin, learning goes beyond the classroom. We engage students in enriching non-academic activities such as excursions, dance, choreography, and creative arts. These experiences build confidence, teamwork, self-expression, and social skills helping every learner grow in a fun, inclusive, and supportive environment.
            </p>
          </div>

          <div style={{ marginBottom: "35px" }}>
            <h3 style={{ color: "#101828" }}>
              Arts & Creativity
            </h3>
            <p style={{ color: "#555", lineHeight: "28px" }}>
              At School for the Special Needs, Iseyin, our arts program encourages self-expression and creativity through music, drama, dance, and visual arts. These activities help students discover their talents, build confidence, and communicate in unique and meaningful ways.
            </p>
          </div>

          <div>
            <h3 style={{ color: "#101828" }}>
              Sports & Athletics
            </h3>
            <p style={{ color: "#555", lineHeight: "28px" }}>
              At School for the Special Needs, Iseyin, our sports and physical activities are designed to promote teamwork, coordination, and confidence among all learners. Through adapted games, exercise routines, and friendly competitions, students build strength, resilience, and a healthy sense of fun.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
  style={{
    width: "100%",
    padding: "80px",
    boxSizing: "border-box",
    background: "#F8F9FC",
    fontFamily: "Arial, sans-serif",
  }}
>
  
  <div style={{ marginBottom: "50px" }}>
    <button
      style={{
        background: "#FFFFFF",
        border: "1px solid #D1D5DB",
        borderRadius: "30px",
        padding: "8px 20px",
        cursor: "pointer",
      }}
    >
      News & Announcements
    </button>

    <h2
      style={{
        fontSize: "42px",
        fontWeight: "700",
        margin: "20px 0",
        color: "#1F2937",
      }}
    >
      What's Happening at School for the Special Needs,
      <br />
      Iseyin
    </h2>

    <p
      style={{
        color: "#6B7280",
        maxWidth: "850px",
        lineHeight: "28px",
      }}
    >
      Stay connected with the latest news, events and success stories from our
      school community.
    </p>
  </div>

 
  <div
    style={{
      background: "#154ABD",
      borderRadius: "16px",
      padding: "25px",
      marginBottom: "40px",
    }}
  >
    
    <div
      style={{
        display: "inline-block",
        width: "55%",
        verticalAlign: "top",
        color: "#FFFFFF",
      }}
    >
      <h3>Academic Achievement</h3>

      <p style={{ lineHeight: "28px" }}>
        We are proud to celebrate the remarkable accomplishments of our graduating students at School for the Special Needs, Iseyin. This year’s results reflect outstanding progress across academic and skill-based programs, with many students demonstrating excellence in literacy, numeracy, and vocational subjects. Their success is a testament to the dedication of our teachers, the perseverance of our learners, and the nurturing environment that empowers every child to thrive and reach their full potential.
      </p>

      <button
        style={{
          marginTop: "20px",
          background: "#FFFFFF",
          color: "#154ABD",
          border: "none",
          borderRadius: "30px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Read Full Story
      </button>
    </div>

    
    <div
      style={{
        display: "inline-block",
        width: "42%",
        marginLeft: "3%",
        verticalAlign: "top",
      }}
    >
      <img
        src={News1}
        alt=""
        style={{
          width: "100%",
          height: "220px",
          borderRadius: "12px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>

  

  <div style={{ fontSize: 0 }}>
   
    <div
      style={{
        display: "inline-block",
        width: "48%",
        marginRight: "4%",
        background: "#FFFFFF",
        borderRadius: "16px",
        overflow: "hidden",
        verticalAlign: "top",
        boxShadow: "0 5px 15px rgba(0,0,0,.08)",
        fontSize: "16px",
      }}
    >
      <img
        src={News2}
        alt=""
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h3>Scholarship Achievement</h3>

        <p style={{ color: "#666", lineHeight: "28px" }}>
          This is marvelous in our sights as the Psaltry International approved a fully funded scholarship for Rabiat Boluwatife, a remarkable student with special needs from Iseyin School for Special Needs, Oyo state. 
Your kindness will empower her to pursue Nursing Science at Hillside University,Oke imesi, Ekiti state. Your philanthropy inspires hope and inclusivity, making a lasting impact on our community. 
        </p>

        <button
          style={{
            border: "1px solid #154ABD",
            background: "#fff",
            color: "#154ABD",
            borderRadius: "25px",
            padding: "10px 18px",
          }}
        >
          Read Full Story
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div
      style={{
        display: "inline-block",
        width: "48%",
        background: "#FFFFFF",
        borderRadius: "16px",
        overflow: "hidden",
        verticalAlign: "top",
        boxShadow: "0 5px 15px rgba(0,0,0,.08)",
        fontSize: "16px",
      }}
    >
      <img
        src={News3}
        alt=""
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h3>Annual Inter-House Sports Festival</h3>

        <p style={{ color: "#666", lineHeight: "28px" }}>
          The annual Inter-House Sports Festival at School for the Special Needs, Iseyin was a joyful celebration of energy, teamwork, and determination. Students participated in a variety of adapted sporting events, including football, track races, and fun games that encouraged movement, coordination, and confidence. After several exciting contests, Blue House emerged as the overall champion, while all houses displayed remarkable spirit, sportsmanship, and unity. The event was not just about winning it was about inclusion, participation, and celebrating the unique abilities of every learner.
        </p>

        <button
          style={{
            border: "1px solid #154ABD",
            background: "#fff",
            color: "#154ABD",
            borderRadius: "25px",
            padding: "10px 18px",
          }}
        >
          Read Full Story
        </button>
      </div>
    </div>
  </div>

  <div style={{ textAlign: "right", marginTop: "30px" }}>
    <button
      style={{
        background: "#154ABD",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "30px",
        padding: "12px 24px",
        cursor: "pointer",
      }}
    >
      Read more
    </button>
  </div>
</div>

      <div
      style={{
        padding: "80px 40px",
        background: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      

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

            

            <div
              style={{
                color: "#1D4ED8",
                fontSize: "18px",
                margin: "15px 0",
              }}
            >
              ★★★★★
            </div>

           

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

    <div
      style={{
        width: "100%",
        padding: "80px",
        boxSizing: "border-box",
        background: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
      }}
    >
      
      <button
        style={{
          border: "1px solid #22C55E",
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "8px 22px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Gallery
      </button>

      <h2
        style={{
          fontSize: "48px",
          fontWeight: "700",
          color: "#111827",
          marginBottom: "20px",
        }}
      >
        Discover Life at Special Needs School, Iseyin
      </h2>

      <p
        style={{
          width: "900px",
          color: "#6B7280",
          lineHeight: "28px",
          marginBottom: "40px",
        }}
      >
        Explore our vibrant campus through photos and videos that showcase
        student life, learning spaces and special moments.
      </p>

      
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "360px",
          background: "#154ABD",
          borderRadius: "18px",
        }}
      >
        
        <img
          src={Gallery1}
          alt=""
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            width: "31%",
            height: "320px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        
        <img
          src={Gallery2}
          alt=""
          style={{
            position: "absolute",
            left: "34.5%",
            top: "20px",
            width: "31%",
            height: "320px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        
        <img
          src={Gallery3}
          alt=""
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            width: "31%",
            height: "320px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>

      
      <div
        style={{
          marginTop: "30px",
          textAlign: "right",
        }}
      >
        <button
          style={{
            background: "#154ABD",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "30px",
            padding: "12px 26px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          View More →
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
  );
};

export default Home;