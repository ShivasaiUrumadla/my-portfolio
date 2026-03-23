import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student / Full Stack Developer</h4>
                <h5>College / University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Exploring full stack development, creating real-world projects like Endless, Cinemascope, and Agro Pilot. Gaining hands-on experience with modern technologies including HTML, CSS, JavaScript, React, Flask, and MySQL to build scalable applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
