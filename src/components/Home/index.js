import LogoTitle from "../../assets/images/logo-s.png";
import "./index.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi! <br /> I'm
          <img src={LogoTitle} alt="developer" />
          kabay
          <br />
          web developer
        </h1>
        <h2>Full Stack Developer / Javascript Expert / Studying In High School</h2>
        <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
      </div>
    </div>
  )
}

export default Home
