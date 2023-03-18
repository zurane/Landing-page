import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Badge from "./components/Badge";
import CallToAction from "./components/Cta";
import Footer from './components/footer'
import Image from './assets/Call.png';
import Picture from './assets/Register - login.png';
import Adobe from "./assets/adidas.svg";
import Forbes from "./assets/coinbase.svg";
import Discovery from "./assets/bbc.svg";
import OldMutual from "./assets/3m.svg";
import Linkedin from "./assets/linkedin.svg";
import "./index.css";

const root = document.getElementById('root');
ReactDOM.render( 
    <>
        <Header />
        <Badge
            logo={Adobe}
            logo2={Forbes}
            logo3={Discovery}
            logo4={OldMutual}
            logo5={Linkedin}
        />
        <Main
            title="Meet easy. Meet now"
            image={Image}
        />
        <Section 
            title="Choose your plan"
            picture={Picture}
        />
        <CallToAction
        />
        <Footer/>
    </>
    
    ,
    root
);



