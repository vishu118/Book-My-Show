export function getNavbar(){
    return`
    <!-- HEADER SECTION START HERE=============================================== -->
    <header class="nav_first_head">
      <div class="nav_first_header container">
        <div class="left_nav">
          <a href="#">
            <img
              src="../IMAGES/bookmyshow-logo-31BC3C7354-seeklogo.com (2).jpg"
              alt=""
              class="left_nav_logo"
            />
          </a>
          <div class="left_nav_search">
            <div class="search_icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              class="search_bar"
            />
          </div>
        </div>
        <div class="right_nav">
          <div class="right_nav_city">
            <span class="city_name">Ranchi</span>
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <div class="right_nav_rest">
            <button class="sign_btn btn">sign in</button>
            <div class="ham_icon"><i class="fa-solid fa-bars"></i></div>
          </div>
          <div class="right_nav_rest1">
            <div class="user_icon"><i class="fa-solid fa-user"></i></div>
            <p class="username">Hi,<span class="user_name">Guest</span></p>
          </div>
        </div>
      </div>
    </header>
    <!-- ============================HEADER SECTION END HERE============================= -->


     <!----------------------------------------------Signin-POP-UP----------------------------------------------->
  <div class="sign_pop_up_container">
    <div class="sign_pop_up">
      <a href="#" class="modalclose"><i class="fa-solid fa-xmark"></i></a>
      <p>Get Started</p>
      <div class="sign_box" id="google_btn">
        <i class="fa-brands fa-google"></i>
        <span>Continue with Google</span>
      </div>
      <div class="sign_box">
        <i class="fa-solid fa-envelope"></i>
        <span>Continue with Email</span>
      </div>
      <div class="sign_box">
        <i class="fa-brands fa-apple"></i>
        <span>Continue with Apple</span>
      </div>
      <div class="noOtp">
        <p>Login without OTP</p>
      </div>
      <p class="pop_text">OR</p>
      <div class="phone">
         <input type="tel" placeholder="Continue with mobile number" class="phone_num" id="number">
      </div>
      <p class="country_code">(Please add country code before phone number)</p>
      <div id="recaptcha-container"></div>
      <div class="height"></div>
      <p class="terms">I agree to the <a href="#">Terms & Conditions</a>& <a href="#">Privacy Policy</a></p>
      <div class="continue" onClick="phoneAuth()">Continue</div>
    </div>
  </div>


   <!------------------------------------------------HAMBURGER MENU-------------------------------------------------->
  <!-- <div class="nav_hamburger_container"> -->
    <div class="nav_hamburger">
      <div class="nav_hamburger_head">
        <h1>Hey!</h1>
        <a href="#" class="Hamclose"><i class="fa-solid fa-xmark"></i></a>
      </div>
  
      <div class="nav_hamburger_row1">
        <div class="hamburger_gift_icon">
          <img src="../Images/rewards_login.avif" alt="" width="40px">
        </div>
        <p>Unlock Special Offers & <br> Great Benefits</p>
        <button class="hamburger_login">Login/Register</button>
      </div>
  
      <div class="nav_othr_section">
        <div class="nav_other_left">
          <i class="fa-solid fa-bell"></i>
          <p>Notification</p>
        </div>
        <div class="hambrgr_chevIcon"><i class="fa-solid fa-chevron-right"></i></div>
      </div>
  
      <div class="nav_othr_section">
        <div class="nav_other_left">
          <i class="fa-solid fa-bag-shopping"></i>
          <p>Your Orders</p>
        </div>
        <div class="hambrgr_chevIcon"><i class="fa-solid fa-lock"></i></div>
      </div>
  
      <div class="nav_othr_section">
        <div class="nav_other_left">
          <i class="fa-solid fa-desktop"></i>
          <p>Stream Library</p>
        </div>
        <div class="hambrgr_chevIcon"><i class="fa-solid fa-lock"></i></div>
      </div>
    </div>
    <!-- </div> -->
  
    <!-- <div class="nav_hamburger_container"> -->
    <div class="nav_hamburger1">
      <div class="nav_hamburger_head1">
        <h1>Hey!Guest</h1>
        <div class="user_icon"><i class="fa-solid fa-user"></i></div>
      </div>
  
      <div class="nav_othr_section1">
        <div class="nav_other_left">
          <i class="fa-solid fa-bell"></i>
          <p>Notification</p>
        </div>
        <div class="hambrgr_chevIcon"><i class="fa-solid fa-chevron-right"></i></div>
      </div>
  
      <div class="nav_othr_section1">
        <div class="nav_other_left">
          <i class="fa-solid fa-bag-shopping"></i>
          <p>Your Orders</p>
        </div>
        <div class="hambrgr_chevIcon"><i class="fa-solid fa-chevron-right"></i></div>
      </div>
  
      <div class="nav_othr_section1">
        <div class="nav_other_left">
          <i class="fa-solid fa-desktop"></i>
          <p>Stream Library</p>
        </div>
        <div class="hambrgr_chevIcon"><i class="fa-solid fa-chevron-right"></i></div>
      </div>
  
      <div class="nav_hamburger_lastrow">
        <button class="hamburger_signOut">Sign Out</button>
      </div>
  
    </div>



     <!----------------------------------------------------SECOND HEADER----------------------------------------------->

  <header class="nav_second_head">
    <div class="nav_second_header_content container">
      <ul class="nav_left_second_head">
        <li><a href="#movieFirst" class="nav_left_secHd_anchr">Movies</a></li>
        <li><a href="#" class="nav_left_secHd_anchr">Stream</a></li>
        <li><a href="#" class="nav_left_secHd_anchr">Events</a></li>
        <li><a href="#" class="nav_left_secHd_anchr">Plays</a></li>
        <li><a href="#" class="nav_left_secHd_anchr">Sports</a></li>
        <li><a href="#" class="nav_left_secHd_anchr">Activities</a></li>
        <li><a href="#" class="nav_left_secHd_anchr">Buzz</a></li>
      </ul>

      <ul class="nav_right_second_head">
        <li><a href="#" class="nav_right_secHd_anchr">ListYourShow <sup class="nav_newSup">NEW</sup></a></li>
        <li><a href="#" class="nav_right_secHd_anchr">Corporates</a></li>
        <li><a href="#" class="nav_right_secHd_anchr">Offers</a></li>
        <li><a href="./HTML/gift.html" class="nav_right_secHd_anchr">Gift Cards</a></li>
      </ul>
    </div>
  </header>


    <!-------------------------------------------------FOR PHONE VIEW---------------------------------------------->

    <header class="nav_first_head1">
      <div class="nav_first_header1">
        <div class="left_nav1">
          <h2>It All Starts Here!</h2>
          <div class="right_nav_city1">
            <span class="city_name1">Kolkata</span>
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>
  
        <div class="right_nav1">
          <button class="btn app_btn">Use App</button>
        </div>
      </div>
    </header>
    <!-- POP UP OF POPULAR CITY =============================================== -->

    <div class="city_pop_up_container">
      <div class="city_pop_up">
        <div class="city_pop_search">
          <div class="search_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="search"
            placeholder="Search for your city"
            class="search_bar city_bar"
          />
        </div>
        <p>Popular cities</p>
        <ul class="city_list">
          <li>
            <div class="city_box">
              <img src="../Images/mumbai.avif" alt="Mumbai" class="cityimg" />
              <div class="cityTrans">Mumbai</div>
            </div>
          </li>
          <li>
            <div class="city_box">
              <img src="../Images/ncr.avif" alt="Delhi-ncr" class="cityimg" />
              <div class="cityTrans">Delhi-ncr</div>
            </div>
          </li>
          <li>
            <div class="city_box">
              <img src="../Images/bang.avif" alt="Bengaluru" class="cityimg" />
              <div class="cityTrans">Bengaluru</div>
            </div>
          </li>
          <li>
            <div class="city_box">
              <img src="../Images/hyd.avif" alt="Hydrabad" class="cityimg" />
              <div class="cityTrans">Hydrabad</div>
            </div>
          </li>
          <li>
            <div class="city_box">
              <img src="../Images/ahd.avif" alt="Ahmedabad" class="cityimg" />
              <div class="cityTrans">Ahmedabad</div>
            </div>
          </li>
          <li>
            <div class="city_box">
              <img src="../Images/chd.avif" alt="Chandigarh" class="cityimg" />
              <div class="cityTrans">Chandigarh</div>
            </div>
          </li>
          <li>
            <div class="city_box">
              <img src="../Images/chen.avif" alt="Chennai" class="cityimg" />
              <div class="cityTrans">Chennai</div>
            </div>
          </li>
          <li>
            <div class="city_box">
              <img src="../Images/pune.avif" alt="Pune" class="cityimg" />
              <div class="cityTrans">Pune</div>
            </div>
          </li>
          <li>
            <div class="city_box">
              <img src="../Images/kolk.avif" alt="Kolkata" class="cityimg" />
              <div class="cityTrans">Kolkata</div>
            </div>
          </li>
          <li>
            <div class="city_box">
              <img src="../Images/koch.avif" alt="Kochi" class="cityimg" />
              <div class="cityTrans">Kochi</div>
            </div>
          </li>
        </ul>
        <p class="view">View All Cities</p>

        <div class="lowerpart_city">
      <p class="other">Other Cities</p>
      <div class="other_city">
        <ul>
          <li><a href="#" class="cityTrans"> Aalo</a></li>
          <li><a href="#" class="cityTrans">Addanki</a></li>
          <li><a href="#" class="cityTrans">Agar Malwa</a></li>
          <li><a href="#" class="cityTrans">Ahmedabad</a></li>
          <li><a href="#" class="cityTrans">Akbarpur</a></li>
          <li><a href="#" class="cityTrans">Alakode</a></li>
          <li><a href="#" class="cityTrans">Alibaug</a></li>
          <li><a href="#" class="cityTrans">Alwar</a></li>
          <li><a href="#" class="cityTrans">Amravati</a></li>
          <li><a href="#" class="cityTrans"> Aalo</a></li>
          <li><a href="#" class="cityTrans">Addanki</a></li>
          <li><a href="#" class="cityTrans">Agar Malwa</a></li>
          <li><a href="#" class="cityTrans">Ahmedabad</a></li>
          <li><a href="#" class="cityTrans">Akbarpur</a></li>
          <li><a href="#" class="cityTrans">Alakode</a></li>
          <li><a href="#" class="cityTrans">Alibaug</a></li>
          <li><a href="#" class="cityTrans">Alwar</a></li>
          <li><a href="#" class="cityTrans">Amravati</a></li>

        </ul>
        <ul>
          <li><a href="#" class="cityTrans"> Aalo</a></li>
          <li><a href="#" class="cityTrans">Addanki</a></li>
          <li><a href="#" class="cityTrans">Agar Malwa</a></li>
          <li><a href="#" class="cityTrans">Ahmedabad</a></li>
          <li><a href="#" class="cityTrans">Akbarpur</a></li>
          <li><a href="#" class="cityTrans">Alakode</a></li>
          <li><a href="#" class="cityTrans">Alibaug</a></li>
          <li><a href="#" class="cityTrans">Alwar</a></li>
          <li><a href="#" class="cityTrans">Amravati</a></li>
          <li><a href="#" class="cityTrans"> Aalo</a></li>
          <li><a href="#" class="cityTrans">Addanki</a></li>
          <li><a href="#" class="cityTrans">Agar Malwa</a></li>
          <li><a href="#" class="cityTrans">Ahmedabad</a></li>
          <li><a href="#" class="cityTrans">Akbarpur</a></li>
          <li><a href="#" class="cityTrans">Alakode</a></li>
          <li><a href="#" class="cityTrans">Alibaug</a></li>
          <li><a href="#" class="cityTrans">Alwar</a></li>
          <li><a href="#" class="cityTrans">Amravati</a></li>
        </ul>
        <ul>
          <li><a href="#" class="cityTrans"> Aalo</a></li>
          <li><a href="#" class="cityTrans">Addanki</a></li>
          <li><a href="#" class="cityTrans">Agar Malwa</a></li>
          <li><a href="#" class="cityTrans">Ahmedabad</a></li>
          <li><a href="#" class="cityTrans">Akbarpur</a></li>
          <li><a href="#" class="cityTrans">Alakode</a></li>
          <li><a href="#" class="cityTrans">Alibaug</a></li>
          <li><a href="#" class="cityTrans">Alwar</a></li>
          <li><a href="#" class="cityTrans">Amravati</a></li>
          <li><a href="#" class="cityTrans"> Aalo</a></li>
          <li><a href="#" class="cityTrans">Addanki</a></li>
          <li><a href="#" class="cityTrans">Agar Malwa</a></li>
          <li><a href="#" class="cityTrans">Ahmedabad</a></li>
          <li><a href="#" class="cityTrans">Akbarpur</a></li>
          <li><a href="#" class="cityTrans">Alakode</a></li>
          <li><a href="#" class="cityTrans">Alibaug</a></li>
          <li><a href="#" class="cityTrans">Alwar</a></li>
          <li><a href="#" class="cityTrans">Amravati</a></li>
        </ul>
        <ul>
          <li><a href="#" class="cityTrans"> Aalo</a></li>
          <li><a href="#" class="cityTrans">Addanki</a></li>
          <li><a href="#" class="cityTrans">Agar Malwa</a></li>
          <li><a href="#" class="cityTrans">Ahmedabad</a></li>
          <li><a href="#" class="cityTrans">Akbarpur</a></li>
          <li><a href="#" class="cityTrans">Alakode</a></li>
          <li><a href="#" class="cityTrans">Alibaug</a></li>
          <li><a href="#" class="cityTrans">Alwar</a></li>
          <li><a href="#" class="cityTrans">Amravati</a></li>
          <li><a href="#" class="cityTrans"> Aalo</a></li>
          <li><a href="#" class="cityTrans">Addanki</a></li>
          <li><a href="#" class="cityTrans">Agar Malwa</a></li>
          <li><a href="#" class="cityTrans">Ahmedabad</a></li>
          <li><a href="#" class="cityTrans">Akbarpur</a></li>
          <li><a href="#" class="cityTrans">Alakode</a></li>
          <li><a href="#" class="cityTrans">Alibaug</a></li>
          <li><a href="#" class="cityTrans">Alwar</a></li>
          <li><a href="#" class="cityTrans">Amravati</a></li>
        </ul>
        <ul>
          <li><a href="#" class="cityTrans"> Aalo</a></li>
          <li><a href="#" class="cityTrans">Addanki</a></li>
          <li><a href="#" class="cityTrans">Agar Malwa</a></li>
          <li><a href="#" class="cityTrans">Ahmedabad</a></li>
          <li><a href="#" class="cityTrans">Akbarpur</a></li>
          <li><a href="#" class="cityTrans">Alakode</a></li>
          <li><a href="#" class="cityTrans">Alibaug</a></li>
          <li><a href="#" class="cityTrans">Alwar</a></li>
          <li><a href="#" class="cityTrans">Amravati</a></li>
          <li><a href="#" class="cityTrans"> Aalo</a></li>
          <li><a href="#" class="cityTrans">Addanki</a></li>
          <li><a href="#" class="cityTrans">Agar Malwa</a></li>
          <li><a href="#" class="cityTrans">Ahmedabad</a></li>
          <li><a href="#" class="cityTrans">Akbarpur</a></li>
          <li><a href="#" class="cityTrans">Alakode</a></li>
          <li><a href="#" class="cityTrans">Alibaug</a></li>
          <li><a href="#" class="cityTrans">Alwar</a></li>
          <li><a href="#" class="cityTrans">Amravati</a></li>
        </ul>
      </div>
      <p class="hide">Hide All Cities</p>
    </div>
      </div>
    </div>


    <div class="below_bar">
      <a href="index.html">
      <img src="../Images/logo.png" alt="" class="below_bar_img">
    </a>
    <a href="./HTML/gift.html">
      <h1>Live <br> <span>Events</span></h1>
    </a>
      <div class="below_bar_user"><i class="fa-solid fa-user"></i></div>
    </div>

    
    `
}