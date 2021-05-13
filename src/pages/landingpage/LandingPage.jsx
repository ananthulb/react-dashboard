import CarouselLayout from "./Carousel";
import AboutLayout from "./About";
import "./landing.css";
const LandingPage = () => {
  return (
    <div className="landing">
      <CarouselLayout />
      <AboutLayout />
    </div>
  );
};

export default LandingPage;
