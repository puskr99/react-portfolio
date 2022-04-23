import "./about.css";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src='https://networkencyclopedia.com/wp-content/uploads/2019/08/hacking-1024x512.jpeg'
            alt="pp"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My first Portfolio hosted with firebase.
        </p>
        <p className="a-desc">
         Always ready for some web and mobile designing jobs.
         
        </p>
        <div className="a-award">
          <img src='https://www.collinsdictionary.com/images/full/medal_514989514_1000.jpg' alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">InterCollege Web Development Competition</h4>
            <p className="a-award-desc" style={{fontSize:'16px'}}>
              Just a thing to complete my portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
