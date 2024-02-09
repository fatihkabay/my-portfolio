import LogoTitle from "../../assets/images/logo-s.png";
import "./index.scss";

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
      </div>
    </div>
  )
}

export default Home
