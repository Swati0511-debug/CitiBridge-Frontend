import React from "react";
import "../components/Home.css";
import Particles from "react-tsparticles";
import { BsFillFileEarmarkCheckFill, BsUpload } from "react-icons/bs";
function Home() {
  return (
    <div
      className="home__main"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1 className="home__title">Clearing Feed Generation</h1>

      <input type="file" id="file" accept="file-extension"></input>
      <label for="file" class="grow">
        <BsUpload
          size="18px"
          color="white"
          style={{ paddingRight: "8px" }}
        ></BsUpload>
        Choose a File
      </label>

      <button class="home__check__btn grow" type="submit">
        <BsFillFileEarmarkCheckFill
          size="20px"
          style={{ paddingRight: "8px" }}
        ></BsFillFileEarmarkCheckFill>
        Check
      </button>

      <img
        className="home__waveImage"
        src="https://newtemplate.net/demo/resume/template/side-menu-wave/images/wave.png"
        alt=""
      ></img>
      <Particles />
    </div>
  );
}

export default Home;
