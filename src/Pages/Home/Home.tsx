import { url } from "inspector";
import { useNavigate } from "react-router-dom";
// import { ReactComponent as LynkcoLogo } from "../../assets/lynkco-logotype.svg";
import "./Home.scss";
import horse from "./../../Assets/Images/horse3.jpg";

const Home = () => {
  let navigate = useNavigate();

  return (
    <main>
      <div className="page">
        <div className="div1">
          <img className="image" src={horse} alt="image" />
        </div>
        <div className="div2">
          <div className="selectors">
            <h1 className="motto">Belive.</h1>
            <div className="row">
              <div className="column">
                <a className="InitialP" href="/display/V75">
                  V
                </a>
                <a className="SecondP" href="/display/V75">
                  75
                </a>
              </div>
              <div className="column">
                <a className="InitialP" href="/display/V86">
                  V{" "}
                </a>
                <a className="SecondP" href="/display/V86">
                  86
                </a>
              </div>
              <div className="column">
                <a className="InitialP" href="/display/GS75">
                  GS{" "}
                </a>
                <a className="SecondP" href="/display/GS75">
                  75
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
