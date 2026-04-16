import heroImage from '../../assets/mockups.png';
import './HeroContent.css';

function HeroContent() {
  return (
    <div className="hero-content">
      <div className="hero-content__badge">TRANSACTION SIMULATOR</div>

      <h1 className="hero-content__title">
        Will this transaction be approved?
      </h1>

      <div className="hero-content__visual">
        <img
          className="hero-content__image"
          src={heroImage}
          alt="Shva transaction simulator illustration"
        />
      </div>
    </div>
  );
}

export default HeroContent;