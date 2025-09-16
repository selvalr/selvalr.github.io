import profile from "../../assets/LRSELVA.png";
function Hero() {
  return (
    <section className="hero1" id="home1">
      <div className="hero-content1">
        <div className="hero-image1">
          <img src={profile} alt="Selvamanan R" className="profile-image1" />
        </div>
        <div className="hero-text1">
          <h1 className="hero-name1">SELVAMANAN R</h1>
          <p className="hero-title1">Web Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
