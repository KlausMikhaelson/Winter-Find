import React, { useEffect } from "react";
import NavBar from "../molecules/NavBar";
import "./Home.css";
import homeCover from "../../img/home-cover.png";
import labImg from "../../img/lab.png";
import product1 from "../../img/product-1.svg";
import product2 from "../../img/product-2.svg";
import product3 from "../../img/product-3.svg";

import bottomIcon1 from "../../img/home-bottom-1.svg";
import bottomIcon2 from "../../img/home-bottom-2.svg";
import bottomIcon3 from "../../img/home-bottom-3.svg";
import Footer from "../molecules/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Home = () => {
  const [models, setModels] = useState("");
  // const dispatch = useDispatch();
  const getModel = async () => {
    const res = await axios.get("/products/3");
    console.log(res.data);
    setModels(res.data);
  };
  useEffect(() => {
    getModel();
  }, []);
  console.log(models);

  const navigate = useNavigate();
  const user = useSelector((state) => state.checkAuthReducer);
  console.log(user);

  function viewProducts() {
    if (user.userName) {
      navigate("/user/publicgallery");
    } else {
      navigate("/login/view");
    }
  }

  return (
    <>
      <div className="container">
        <NavBar />
        <div className="home-container">
          <div className="home-cover-image">
            <div className="home-cover-details">
              <h1 className="header-text">
                A World of Virtual Training Space for Healthcare professionals
              </h1>
              <p>
                Learn and Unlearn to improve your work quality and efficiency
                with dedicated and customized analytics
              </p>
              <button>Explore now</button>
            </div>
            <img src={homeCover} alt="" />
          </div>

          <div className="home-cover-bottom">
            <div>
              <h2>The problem</h2>
              <p>
                Medication errors and Medical Neglicene contribute to 5.2M
                errors globally. The skills of the medicos contributes to the
                major share of it.
              </p>
            </div>
            <div>
              <h2>Why the problem prevails ?</h2>
              <p>
                The type of classroom training provided to healthacre
                professionals lacks practical experience, training analytics and
                governance
              </p>
            </div>
            <div>
              <h2>The solution</h2>
              <p>
                Reducing the medical errors to 50% by creating an ecosystem
                through immersive and personalized training dashboard using
                Extended Reality.
              </p>
            </div>
          </div>

          <div className="home-mid-section">
            <div className="home-mid-top">
              <div className="home-mid-left">
                <img src={labImg} alt="" />
              </div>
              <div className="home-mid-right">
                <h1>We focus to bring VR more reliable and accessible</h1>
                <p>
                  An Open ended platform welcoming doctors, hospitals, surgeons
                  and manufacturers to co-create virtual reality solutions in
                  healthcare.
                </p>
                <ol>
                  <li>REALTIME HAPTIC (TACTILE) FEEDBACK</li>
                  <li>PERSONALISED TRAINING EXPERIENCE</li>
                  <li> EMBEDDED TRAINING ANALYTICS</li>
                </ol>
                <button>Learn more</button>
              </div>
            </div>

            <div className="home-mid-bottom">
              <h2>Learn the Need of the hour</h2>
              <Swiper
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <p>
                    Practical aasessment of staffs is required other than the
                    convential paper test, and VR simluation can actually help
                    in evaluating the staffs.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    1 B - 1.5 B Neonatal fail to establish spontaneous breathing
                    at birth. This can be supported, if healthcare professionals
                    present at the time of birth are skilled in the art of
                    neonatal resuscitation
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    Training analytics provide strong evaluation for Physicians
                    and nursing staff to understand and improve their abilities
                    and skills
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="home-bottom-section">
            <div className="home-bottom-section-top-container">
              <div className="home-bottom-section-top">
                <div className="home-bottom-section-top-content">
                  <h2>Our Products </h2>
                  <p>
                    Explore the new world of learning healthcare science and
                    engineering
                  </p>
                </div>
                <div className="home-bottom-section-top-images">
                  {/* {models.length
                    ? models.map((model) => (
                        <div>
                          <img
                            src={
                              "data:image/jpg;base64," +
                              model.coverImage?.base64
                            }
                            alt=""
                          />
                          <p>{model.productTitle}</p>
                        </div>
                      ))
                    : ""} */}
                  <div>
                    <img src={product1} alt="" />
                    <p>NSP</p>
                  </div>
                  <div>
                    <img src={product2} alt="" />
                    <p>Diagnostic Mapping</p>
                  </div>
                  <div>
                    <img src={product3} alt="" />
                    <p>Neuro SurgiX</p>
                  </div>

                  <button onClick={viewProducts} className="view-btn">
                    View more
                  </button>

                  {/* <div>
                    <img src={lab3} alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="home-bottom-section-bottom">
              <div className="home-bottom-section-bottom-container">
                <div className="home-bottom-section-bottom-content">
                  <h2>Why choose us?</h2>
                  <p>
                    Innovations combined with entrepreneurial strategies can
                    bring about a radical reform by reviving the economics of
                    the medical industry. We aim to bring reforms to the
                    existing healthcare system.
                  </p>
                </div>

                <div className="home-bottom-section-bottom-images">
                  <div className="home-bottom-section-bottom-images-parent">
                    <img src={bottomIcon1} alt="" />
                    <p>Robust Training Analytics </p>
                  </div>
                  <div className="home-bottom-section-bottom-images-parent">
                    <img src={bottomIcon2} alt="" />
                    <p>Strong Ethical Clearance</p>
                  </div>
                  <div className="home-bottom-section-bottom-images-parent">
                    <img src={bottomIcon3} alt="" />
                    <p>Near to real experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
