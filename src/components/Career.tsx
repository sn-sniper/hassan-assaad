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
                <h4>Web Developer - Team Leader</h4>
                <h5>Bracket Technologies</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed and streamlined team processes to boost productivity and customer satisfaction, 
              while contributing to website development through coding, testing, and debugging.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack Dev - Intern</h4>
                <h5>VanRise</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed and implemented RESTful APIs with ASP.NET and MS SQL Server for efficient client-server data exchange. 
              Built responsive web applications using Angular.JS and Bootstrap UI to deliver seamless user experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>ADCT Media</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Created modern, visually engaging websites with dynamic animations and responsive design 
              principles to enhance user interaction and brand storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
