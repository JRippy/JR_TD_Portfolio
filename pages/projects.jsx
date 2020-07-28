import React, { useState, useEffect } from 'react';
import Head from 'next/head'

import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'

const Home = () => {

  useEffect(() => {
   console.log("%c ","padding-left:100%;padding-top:50%;background-size:cover;background-image:url('https://i.giphy.com/media/MM0Jrc8BHKx3y/giphy.webp')");
 });

  return (
  <React.Fragment>
    <Head>
      <title>Julien Rippstein</title>
      <link rel="icon" href="/favicon.png" />
      {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/> */}
      <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
      <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oswald:300,400,700%7CLato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic%7CFjalla+One:regular%7CAverage:regular"/>
    </Head>


    <div className="page-wrapper">
      <section className="full-section project-header" id="projects">

      <h1 id="top-title"><span className="tuesday-night">PROJECTS</span></h1>
</section>
      <section className="main-content">
        <ProjectCard
          project="JR_HUB_VR"
          description="Sandbox game with interaction and VR features."
          img="pulsar-graph-editor.png"
          bgImg={false}
          imgFirst={true}
          technologies={["unity"]}
          links={[
            {
              link: "https://pulsarvfx.com",
              icon: "las la-link"
            },
            {
              link: "https://github.com/JRippy/JR_TD_Hub",
              icon: "lab la-github"
            }
          ]}
        />
        <ProjectCard
          project="VR Camera Recorder"
          description="Tool to record animation sequance with a 3d virtual camera."
          img="pulsar-graph-editor.png"
          bgImg={true}
          imgFirst={false}
          technologies={["unity"]}
          links={[
            {
              link: "https://github.com/JRippy/JR_TD_Hub",
              icon: "lab la-github"
            }
          ]}
        />
        <ProjectCard
          project="Blood Pressure Defender"
          description="Tower defense in virtual reality."
          img="pulsar-graph-editor.png"
          bgImg={false}
          imgFirst={true}
          technologies={["unity"]}
          links={[
            {
              link: "https://pulsarvfx.com",
              icon: "las la-link"
            },
            {
              link: "https://github.com/JRippy/JR_TD_Hub",
              icon: "lab la-github"
            }
          ]}
        />
        <ProjectCard
          project="Launcher Wellapy"
          description="Secure virtual reality launcher for virtual hypnotherapy"
          img="wellapy.png"
          bgImg={true}
          imgFirst={false}
          technologies={["UE4", "react", "C++", "Csharp"]}
          links={[
            {
              link: "http://www.wellapyco.com/",
              icon: "las la-link"
            }
          ]}
        />
        <ProjectCard
          project="Bin Saver"
          description="Virtual reality game developped for the CNRS Grenoble 2020."
          img="pulsar-graph-editor.png"
          bgImg={false}
          imgFirst={true}
          technologies={["UE4"]}
          links={[
            {
              link: "https://www.grenoblegamelab.com/",
              icon: "las la-link"
            }
          ]}
        />
        <ProjectCard
          project="SpaceSlingShot"
          description="Virtual reality game developed for SUmmer Jam 2019. VR slingshot with 0G."
          img="SpaceSlingShot.png"
          bgImg={true}
          imgFirst={false}
          technologies={["UE4"]}
          links={[
            {
              link: "https://jrippy.itch.io/spaceslingshot",
              icon: "las la-link"
            }
          ]}
        />
        <ProjectCard
          project="Ichor"
          description="Asynchrone virtual reality game. I work on enemy spawner, pathfinding and enemy focus."
          img="ICHOR_POSTER.jpg"
          bgImg={false}
          imgFirst={true}
          technologies={["UE4"]}
          links={[
            {
              link: "https://artfx.school/projet-fin-etudes/ichor/",
              icon: "las la-link"
            }
          ]}
        />
        <ProjectCard
          project="Space Monkey"
          description="Space Monkey is an exploration game developed with UE4."
          img="SpaceMonkey.png"
          bgImg={true}
          imgFirst={false}
          technologies={["UE4"]}
          links={[
            {
              link: "https://tryall.itch.io/space-monkey",
              icon: "las la-link"
            }
          ]}
        />
        <ProjectCard
          project="Heisei"
          description="Video game developped and projected for Montpellier en Lumière"
          img="pulsar-graph-editor.png"
          bgImg={false}
          imgFirst={true}
          technologies={["react-native", "viro-react", "maya", "houdini", "blender"]}
          links={[
            {
              link: "https://github.com/lgeertsen/MagnetAR",
              icon: "lab la-github"
            }
          ]}
        />
        <ProjectCard
          project="OCR Mobile"
          description="Mobile application using Tesseract to read documents."
          img="Ocr.jpg"
          bgImg={true}
          imgFirst={false}
          technologies={["Android_Studio_icon.svg", "java7"]}
          links={[
          ]}
        />

      </section>
    </div>

    <style jsx>{`
      .project-header {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 10px solid #fff;
        overflow: hidden;
        height: 60%;
        background-color: rgb(233, 196, 186);
        // background-image: linear-gradient(180deg, rgba(255, 255, 255, .5), rgba(255, 255, 255, .5)), url("/denise-jans-ScQXxiIZ0Qo-unsplash.jpg");
        background-image: linear-gradient(180deg, rgba(255, 255, 255, .2), rgba(255, 255, 255, .2)), url("/bram-van-oost-c9RxcTVHD_0-unsplash.jpg");
        background-position: 100% 40%;
        // background-position: 50% 0px;
        background-size: cover;
        background-repeat: no-repeat;
        // background-attachment: fixed;
      }
    `}</style>
  </React.Fragment>
)}

export default Home
