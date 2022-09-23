import React from "react";
import "./Footer.css";
import playStore from "../../assets/playStore.png";
import appStore from "../../assets/appStore.png";
import visa from "../../assets/visa.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import americanExpress from "../../assets/americanExpress.png";
import applePay from "../../assets/applePay.png";
import mastercard from "../../assets/mastercard.png";
import discover from "../../assets/discover.png";
import gPay from "../../assets/gPay.png";
import payPal from "../../assets/payPal.png";

export default function () {
  return (
    <div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#eae0da",
          padding: "30px 0",
        }}
      >
        <div className="container">
          <div className="row">
            <div id="footerLogoDiv1">
              <img src={appStore} alt="" />
              <img src={playStore} alt="" />
            </div>
            <div id="footerLogoDiv2">
              <img src={visa} alt="" />
              <img src={americanExpress} alt="" />
              <img style={{ maxWidth: "30px" }} src={mastercard} alt="" />
              <img src={discover} alt="" />
              <img src={applePay} alt="" />
              <img src={gPay} alt="" />
              <img src={payPal} alt="" />
              <div className="row">
                <p>Payment options will vary by merchant</p>
              </div>
            </div>
          </div>
          <div className="row" id="footerUlRow">
            <p
              style={{
                fontSize: "13px",
                marginBottom: "0",
                lineHeight: "1.53846154",
              }}
            >
              Under the Liquor Control Reform Act 1998 it is an offence:
            </p>
            <ul style={{ fontSize: "13px", lineHeight: "1.53846154" }}>
              <li>
                to supply alcohol to a person under the age of 18 years (penalty
                exceeds $8,000).
              </li>
              <li>
                for a person under the age of 18 years to purchase or receive
                liquor (penalty exceeds $700). Liquor Licence No. 57711084
              </li>
            </ul>
          </div>
          <div className="row">
            <div id="footerBottomLeftDiv">
              <p>App</p>
              <p>About</p>
              <p>Contact</p>
              <p>Press</p>
              <p>Wine News</p>
              <p>Wine Style Awards</p>
              <p>Merchants</p>
              <p>Brand Partnership</p>
              <p>Become an Affiliate</p>
              <p>Careers</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Content Policy</p>
              <p>Terms of Sale</p>
              <p>Sitemap</p>
            </div>
            <div id="footerBottomRightDiv">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
              <div className="row">
                <p style={{ fontSize: "10px", marginTop: "10px" }}>
                  © Vivino 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
