import React from "react";
import HomeHero from "../components/homeHero";
import Navbar from "../components/navbar";
import Section from "../components/section";
// import "../assets/css/home.css";

const Home = () => {
    return (
        <>
            <Navbar/>
            <HomeHero/>
            <Section/>
    
        </>
    );
};

export default Home;