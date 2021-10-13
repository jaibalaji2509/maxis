import { Button } from "reactstrap";
import React, { useState } from "react";
import { CCard } from "@coreui/react";
import cart from "../src/image/cart-item.svg";
import ordertracker from "../src/image/order-tracker.svg";
import account from "../src/image/account.svg";
import TextField from "@material-ui/core/TextField";
import { AiOutlineSearch } from "react-icons/ai";
import maxis from "../src/image/maxis-logo.png";
import herobanner from "../src/image/herobanner-desktop.jpg";
import samsung from "../src/image/samsung-galaxy-z-series-herobanner-desktop.jpg";
import hero from "../src/image/hero.jpg";
import maxisq from "../src/image/maxis.jpg";
import desktop from "../src/image/desktop.jpg";
import view from "../src/image/arrow-green.svg";
import { BiDotsVertical } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import phoneo from "../src/image/13-pro-max-front.png";
import phonet from "../src/image/13-pro-front.png";
import phoneth from "../src/image/13-front.png";
import baseback from "../src/image/content-card.jpg";
import fibre from "../src/image/fibre.jpg";
import postpaid from "../src/image/postpaid.jpg";
import postpa from "../src/image/content-card (1).jpg";
import jodi from "../src/image/content-card (2).jpg";
import oldyou from "../src/image/content-card (3).jpg";
import apple from "../src/image/appstore.svg";
import play from "../src/image/playstore.svg";
import play1 from "../src/image/huaweistore.svg";
import facebook from "../src/image/facebook.svg";
import instagram from "../src/image/instagram.svg";
import youtube from "../src/image/youtube.svg";
import twitter from "../src/image/twitter.svg";
import linkedin from "../src/image/linkedin.svg";

function Maxis() {
  const [close, setclose] = useState(true);

  const butclose = () => {
    setclose(false);
  };
  return (
    <div>
      <CCard>
        {close && (
          <div>
            <div className="head-1">
              Safeguard yourself from phishing, learn more <u>here</u>
            </div>
            <div className="eclips">
              <div className="dot">
                <BiDotsVertical />
              </div>
              <div className="close" onClick={butclose}>
                <AiOutlineClose />
              </div>
            </div>
          </div>
        )}
        <div className="upperhead ">
          consumer &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="opop">business</span> &nbsp; &nbsp; &nbsp;
          <span className="opop">hotlink</span>
          <div className="uperright">
            <img src={cart} alt="cart" width="18" height="18" />
            &nbsp; cart &nbsp; &nbsp; &nbsp; &nbsp;
            <img
              src={ordertracker}
              alt="order-tracker"
              width="18"
              height="18"
            />
            &nbsp; delivery tracker &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={account} alt="acconut" width="18" height="18" />
            &nbsp; login &nbsp; &nbsp; &nbsp; &nbsp; en &nbsp; | &nbsp;{" "}
            <span className="bmopo">bm</span>
          </div>
        </div>

        <div className="navbar">
          Mobile Plans &nbsp; &nbsp; &nbsp; &nbsp; broadband &nbsp; &nbsp;
          &nbsp; &nbsp; device &nbsp; &nbsp; &nbsp; &nbsp; lifestyle &nbsp;
          &nbsp; &nbsp; &nbsp;
          <span className="colorpick">
            {" "}
            <AiOutlineSearch />
          </span>
          &nbsp;
          <div style={{ marginLeft: "590px", marginTop: "-30px" }}>
            <TextField
              id="fullName"
              label="search"
              style={{ marginTop: "-10px", width: "240px" }}
            />
          </div>
          <div className="logo">
            <img src={maxis} alt="maxis-logo" width="140" />
          </div>
        </div>

        <div>
          <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
              <li data-target="#demo" data-slide-to="3"></li>
              <li data-target="#demo" data-slide-to="4"></li>
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={herobanner}
                  alt="Los Angeles"
                  width="1584"
                  height="300"
                />
              </div>
              <div className="carousel-item">
                <img src={samsung} alt="Chicago" width="1584" height="300" />
              </div>
              <div className="carousel-item">
                <img src={hero} alt="New York" width="1584" height="300" />
              </div>
              <div className="carousel-item">
                <img src={maxisq} alt="New York" width="1584" height="300" />
              </div>
              <div className="carousel-item">
                <img src={desktop} alt="New York" width="1584" height="300" />
              </div>
            </div>
          </div>
        </div>

        <div className="baneerbutt">
          <Button color="success">Find out more</Button>{" "}
        </div>

        <div className="colmn">
          <h2>
            Latest
            <br />
            devices -
          </h2>
        </div>

        <div className="view">VIEW ALL</div>

        <div className="viewico">
          <img src={view} alt="arrow" />
        </div>

        <div>
          <CCard className="phoncar">
            <p className="sticker-text">REGISTER INTEREST</p>
            <div style={{ marginTop: "-3px" }}>
              <img src={phoneo} alt="phone-1" height="180" />
            </div>

            <div className="device-name">
              <p className="brand">Apple</p>
              <h4 className="model" style={{ height: "52px" }}>
                iPhone 13 Pro Max
              </h4>
            </div>

            <div className="device-plan">
              <div className="package">
                <p className="plan">Zerolution from</p>

                <p className="price" style={{ textAlign: "left" }}>
                  RM<span className="money">115</span>/mth
                </p>
              </div>
              <div className="buy-now">FIND OUT MORE</div>
            </div>
          </CCard>
        </div>

        <div>
          <CCard className="phoncar-1">
            <p className="sticker-text">REGISTER INTEREST</p>
            <div style={{ marginTop: "-3px" }}>
              <img src={phonet} alt="phone-2" height="180" />
            </div>

            <div className="device-name">
              <p className="brand">Apple</p>
              <h4 className="model" style={{ height: "52px" }}>
                iPhone 13 Pro Max
              </h4>
            </div>

            <div className="device-plan">
              <div className="package">
                <p className="plan">Zerolution from</p>

                <p className="price" style={{ textAlign: "left" }}>
                  RM<span className="money">105</span>/mth
                </p>
              </div>
              <div className="buy-now">FIND OUT MORE</div>
            </div>
          </CCard>
        </div>
        <div>
          <CCard className="phoncar-2">
            <p className="sticker-text">REGISTER INTEREST</p>
            <div style={{ marginTop: "-3px" }}>
              <img src={phoneth} alt="phone-3" height="180" />
            </div>

            <div className="device-name">
              <p className="brand">Apple</p>
              <h4 className="model" style={{ height: "52px" }}>
                iPhone 13
              </h4>
            </div>

            <div className="device-plan">
              <div className="package">
                <p className="plan">Zerolution from</p>

                <p className="price" style={{ textAlign: "left" }}>
                  RM<span className="money">79</span>/mth
                </p>
              </div>
              <div className="buy-now">FIND OUT MORE</div>
            </div>
          </CCard>

          <CCard className="backimd">
            <div className="base">
              <div className="base-1">
                Let's get <br />
                ahead
              </div>
              <div className="basim-1">
                <img src={baseback} alt="content-base" width="425" />
              </div>

              <div className="basecont">
                <div className="container" style={{ fontSize: "16px" }}>
                  Switch to Maxis, the No. 1 Network in Malaysia
                  <p
                    style={{
                      color: "#8a7f7f",
                      fontSize: "14px",
                      fontWeight: "100",
                    }}
                  >
                    Enjoy the best mobile and fibre experience on our 5G-ready
                    network.
                  </p>
                  <button className="btn-text">
                    <span>Find Out More</span> <img src={view} alt="arrow" />
                  </button>
                </div>
              </div>

              <div className="basim-2">
                <img src={fibre} alt="content-base" width="425" />
              </div>

              <div className="basecont">
                <div className="container" style={{ fontSize: "16px" }}>
                  Better WiFi experience with Maxis Home Fibre
                  <p
                    style={{
                      color: "#8a7f7f",
                      fontSize: "14px",
                      fontWeight: "100",
                    }}
                  >
                    Superfast home internet up to 800Mbps with Mesh WiFi for
                    whole home coverage.
                  </p>
                  <button className="btn-text">
                    <span>SIGN UP NOW</span> <img src={view} alt="arrow" />
                  </button>
                </div>
              </div>

              <div className="basim-3">
                <img src={postpaid} alt="content-base" width="425" />
              </div>

              <div className="basecont-1">
                <div className="container" style={{ fontSize: "16px" }}>
                  The postpaid plan that brings you 5G-Ready experience
                  <p
                    style={{
                      color: "#8a7f7f",
                      fontSize: "14px",
                      fontWeight: "100",
                    }}
                  >
                    Enjoy high-speed internet plus unlimited calls, SMS and
                    other perks for you and your family.
                  </p>
                  <button className="btn-text">
                    <span>SIGN UP NOW</span> <img src={view} alt="arrow" />
                  </button>
                </div>
              </div>

              <div className="basim-4">
                <img src={postpa} alt="content-base" width="425" />
              </div>

              <div className="basecont-1">
                <div className="container" style={{ fontSize: "16px" }}>
                  Better smartphone for RM1
                  <p
                    style={{
                      color: "#8a7f7f",
                      fontSize: "14px",
                      fontWeight: "100",
                    }}
                  >
                    Add a Share Line to your Maxis Postpaid plan and get a
                    better smartphone for RM1.
                  </p>
                  <button className="btn-text">
                    <span>FIND OUT MORE</span> <img src={view} alt="arrow" />
                  </button>
                </div>
              </div>

              <div className="basim-5">
                <img src={jodi} alt="content-base" width="425" />
              </div>

              <div className="basecont-2">
                <div className="container" style={{ fontSize: "16px" }}>
                  GANJIL. Now streaming on Maxis TV.
                  <p
                    style={{
                      color: "#8a7f7f",
                      fontSize: "14px",
                      fontWeight: "100",
                    }}
                  >
                    Choose between fantasy and reality, and enjoy early access
                    to episodes for FREE.
                  </p>
                  <button className="btn-text">
                    <span>FIND OUT MORE</span> <img src={view} alt="arrow" />
                  </button>
                </div>
              </div>

              <div className="basim-6">
                <img src={oldyou} alt="content-base" width="425" />
              </div>

              <div className="basecont-2">
                <div className="container" style={{ fontSize: "16px" }}>
                  GANJIL. Now streaming on Maxis TV.
                  <p
                    style={{
                      color: "#8a7f7f",
                      fontSize: "14px",
                      fontWeight: "100",
                    }}
                  >
                    Choose between fantasy and reality, and enjoy early access
                    to episodes for FREE.
                  </p>
                  <button className="btn-text">
                    <span>FIND OUT MORE</span> <img src={view} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </CCard>

          <CCard>
            <div className="ulaimg">
              <div className="ulutexgt">
                Malaysia’s most advanced mobile and fibre network
              </div>
              <div className="ulupara">
                <p style={{ marginLeft: "126px" }}>It's what we do.</p>
                <p style={{ marginLeft: "-27px" }}>
                  Our trusted network covers 9 out of 10 Malaysians.
                </p>
                <p style={{ marginLeft: "63px" }}>
                  Discover if that includes you.
                </p>
                <p></p>
              </div>

              <div className="parallax-cta-wrap">
                <a
                  href="/en/broadband/maxis-fibre/#fibre-checker"
                  onclick="gaEvents.pushInDataLayer(this,'parralax','Click Event' ,'CHECK OUR FIBRE COVERAGE')"
                  className="btn btn-primary"
                  data-hover="CHECK OUR FIBRE COVERAGE"
                >
                  <span style={{fontSize:"11px"}}>CHECK OUR FIBRE COVERAGE</span>
                </a>
                &nbsp;   &nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp; 

                <a
                  href="/en/about-maxis/maxis-network/network-map"
                  onclick="gaEvents.pushInDataLayer(this,'parralax','Click Event' ,'CHECK OUR MOBILE COVERAGE')"
                  className="btn btn-primary"
                  data-hover="CHECK OUR MOBILE COVERAGE"
                >
                  <span style={{fontSize:"11px"}}>CHECK OUR MOBILE COVERAGE</span>
                </a>
              </div>
            </div>
          </CCard>

          <CCard>
            <div className="footer">
              <div className="fotcon">Download Maxis App</div>
              <div className="footico">
                <img src={apple} alt="aple" />
                &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                <img src={play} alt="playstore" />
                &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                <img src={play1} alt="playstore" />
              </div>
              <div className="fotcon1">Follow Us</div>
              <div className="footico1">
                <img src={facebook} alt="facebook" />
                &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                <img src={instagram} alt="instagram" />
                &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                <img src={youtube} alt="youtube" />
                &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                <img src={twitter} alt="twitter" />
                &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                <img src={linkedin} alt="linkedin" />
              </div>

              <div className='footercontentsa'>
               <span style={{fontSize:"12px", fontWeight:"700"}}>Maxis</span>
                    <div> 
                    About Maxis<br/>
                    Investor Relations<br/>
                    Our Network<br/>
                    Corporate Responsibility <br/>
                    Newsroom<br/>
                    Careers<br/>
                      </div>
              </div>

              <div className='footercontentsu'>
              <span style={{fontSize:"12px", fontWeight:"700"}}>Support</span>
                    <div > 
                    Contact Us<br/>
                    FAQ<br/>
                    Find A Store & Appointment<br/>
                    Delivery Tracker <br/>
                      </div>
              </div>


              <div className='footercontentte'>
              <span style={{fontSize:"12px", fontWeight:"700"}}>Terms & Policies</span>
                    <div> 
                    Terms & Conditions<br/>
                    Privacy Policy<br/>
                    Terms of Use<br/>
                    Phishing and Scam Protection<br/>
                    SKMM Notification<br/>
                      </div>
              </div>

              <div className='fothr'>
                <hr/>
                </div>


<div className="botomfot">
  <p>
  Price stated may be subject to Service Tax
  </p>
  <p>
  Redress your complaints at the Consumer Forum Malaysia (CFM)  | &nbsp; &nbsp;<u> www.complaint.cfm.org.my</u>
  </p>
</div>


                    <div className='botrightfot'>
                      <p>Copyright © 2021 Maxis Bhd. All rights reserved.</p>
                      </div>
            </div>
          </CCard>
        </div>
      </CCard>
    </div>
  );
}

export default Maxis;
