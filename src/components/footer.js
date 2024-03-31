function Footer() {

  return (

    <>
      <div className="container">
        <footer className="footer">
          {/* left */}
          <div className="left-parent">
            <div className="left-column">
              <div className="sub-column">
                <h4 className="column-title font-sans-serif">
                  COMPANY INFO
                </h4>
                <ul>
                  <li className="column-item">
                    <a href="#">
                      About
                    </a>
                  </li>
                  <li className="column-item">
                    <a href="#">
                      Social Responsibilities
                    </a>
                  </li>
                  <li className="column-item">
                    <a href="#">
                      Affiliate
                    </a>
                  </li>
                  <li className="column-item">
                    <a href="#">
                      Fashion Blogger
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sub-column">
                <h4 className="column-title font-sans-serif">
                  HELP & SUPPORT
                </h4>
                <ul>
                  <li className="column-item">
                    <a href="#">
                      Shipping Info
                    </a>
                  </li>
                  <li className="column-item">
                    <a href="#">
                      Returns
                    </a>
                  </li>
                  <li className="column-item">
                    <a href="#">
                      How to order
                    </a>
                  </li>
                  <li className="column-item">
                    <a href="#">
                      How to track
                    </a>
                  </li>
                  <li className="column-item">
                    <a href="#">
                      Size Chart
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sub-column">
                <h4 className="column-title font-sans-serif">
                  CUSTOMER CARE
                </h4>
                <ul>
                  <li className="column-item">
                    <a href="#">
                      Contact Us
                    </a>
                  </li>
                  <li className="column-item">
                    <a href="#">
                      Payments
                    </a>
                  </li>
                  <li className="column-item">
                    <a href="#">
                      Bonus Points
                    </a>
                  </li>
                  <li className="column-item">
                    <a href="#">
                      Notices
                    </a>
                  </li>
                </ul>
              </div>
            </div>


            <div className="lef-hor-parent">
              <p className="copy-rights">©2010-2020 All Rights Reserved</p>
              <div className="horizontal-layout">

                <a href="#" className="text-decoration"> Privacy Center</a>
                <a href="#" className="text-decoration"> Privacy & Cookie Policy</a>
                <a href="#" className="text-decoration"> Manage Cookies</a>
              </div>
              <div className="horizontal-layout">

                <a href="#" className="text-decoration"> Terms & Conditions</a>
                <a href="#" className="text-decoration"> Copyright Notice</a>
                <a href="#" className="text-decoration"> Imprint</a>
              </div>
            </div>




          </div>


          {/* right */}
          <div className="right-column">

            <div className="rsub-par">
              <div className="rsub1">
                <h4 className="column-title font-sans-serif">
                  SOCIALS
                </h4>
                <div className="rsub-content">

                  <img src="images/facebook.png" alt="" className="social-logo" />
                  <img src="images/twitter.png" alt="" className="social-logo" />
                  <img src="images/instagram.png" alt="" className="social-logo" />
                  <img src="images/tiktok.png" alt="" className="social-logo" />
                  <img src="images/snapchat.png" alt="" className="social-logo" />

                </div>
              </div>
              <div className="rsub2">
                <h4 className="column-title font-sans-serif">
                  PLATFORMS
                </h4>
                <div className="rsub-content">

                  <img src="images/android.png" alt="" className="platform-logo" />
                  <img src="images/iphone.jpg" alt="" className="platform-logo" />

                </div>
              </div>

            </div>
            <div >
              <h4 className="font-sans-serif">SIGN UP</h4>
              <div className="rsub-par-2">
                <input className="signup" type="text" placeholder="Your email" name="youremail" />
                <div>
                  <button type="submit" className="custom-button"> SUBSCRIBE</button>
                </div>
              </div>

              <div>
                <p className="font-small">By clicking the SUBSCRIBE button, you are agreeing to our <a href="#" className=" privacy"> privacy & Cookie Policy</a></p>
              </div>
            </div>

            <div className="paymant-container">
              <h4 className="font-sans-serif">WE ACCEPT</h4>
              <div className="payment-methods">
                <img src="images/master-card.jpg" alt="" className="payment-logo" />
                <img src="images/paypal.png" alt="" className="payment-logo" />
                <img src="images/ebay.png" alt="" className="payment-logo" />
                <img src="images/gpay.png" alt="" className="payment-logo" />
                <img src="images/mono-bank.jpg" alt="" className="payment-logo" />
                <img src="images/discover.png" alt="" className="payment-logo" />
                <img src="images/western-union.png" alt="" className="payment-logo" />
                <img src="images/payoneer.jpg" alt="" className="payment-logo" />
                <img src="images/ipay.svg" alt="" className="payment-logo" />
                <img src="images/american-express.png" alt="" className="payment-logo" />
                <img src="images/amazon.jpg" alt="" className="payment-logo" />
                <img src="images/alipay.png" alt="" className="payment-logo" />
                <img src="images/bit-pay.png" alt="" className="payment-logo" />
                <img src="images/bitcoin.jpg" alt="" className="payment-logo" />

              </div>
            </div>


          </div>
        </footer>
      </div>
    </>
  )
}


export default Footer;