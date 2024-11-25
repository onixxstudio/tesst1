import Image from 'next/image'
import React from 'react'
import onixxlogo from "../../public/onixxlogowhite.png"
const page = () => {
  return (
    <body>
      {/* <!-- Parallax Pixel Background Animation --> */}
      <section className="animated-background">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
      {/* <!-- End --> */}

      <a id="profilePicture" href="#popup">
        <Image src={onixxlogo} alt="logo" />

      </a>

      <div className="overlay" id="popup">
        <div className="popup">
          <div className="popup-photo">
            <Image src={onixxlogo} alt="Profile Picture" />
            {/* </a> */}
          </div>
          {/* <!-- <div className="popup-quote"> */}

          {/* </div> --> */}
          {/* <a className="popup-close" onclick="history.back()">&times;</a> */}
        </div>
      </div>

      <div id="userName">
        {/* @onixxstudio */}
        <h2 className="text-2xl;">Onixx Studio</h2>
      </div>

      <div id="links">


        <a className="link" href="https://www.onixxstudio.com">
          Home
        </a>

        <a className="link" href="mailto:info@onixxstudio.com" target="_blank">
          {/* <!-- <i className="fab fa-github">&nbsp;</i> -->Email */}
        </a>
        <a className="link" href="https://docs.google.com/document/d/1SeysEPNZOSRnBrIelwjJ1J1a3vcHPtBqoeCit7J7wxc/edit" target="_blank">
          Projects
        </a>
        <a className="link" href="tel:+1(647)677-3280" target="_blank">
          Book a free Call now
        </a>
        <a className="link" href="https://www.linkedin.com/in/ayushsaini22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <i className="fab fa-linkedin">&nbsp;</i>Linkedin

        </a>

        <a className="link" href="https://www.instagram.com/onixxstudio" target="_blank">
          <i className="fab fa-instagram">&nbsp;</i>Instagram
        </a>


        {/* <!-- <a classNameName="link" href="" target="_blank"> */}
        {/* <i classNameName="fa fa-play-circle">&nbsp;</i>MyAnimeList */}
        {/* </a> --> */}
      </div>

      <div id="hashtag">
        #Onixx Studio❤
      </div>
    </body>
  )
}

export default page
