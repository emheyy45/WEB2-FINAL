import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const enforceSectionTL = gsap.timeline();

enforceSectionTL.from(".header3",{duration: 6, x: 500});

export function sectionThreeAnimation(){
    ScrollTrigger.create({
        trigger: ".header3",
        animation: enforceSectionTL,
        start: "top 50%",
        end: "top 50%",
        scrub: 1
        //markers: true
    });

    
}

const paraThreeTL = gsap.timeline();

paraThreeTL.from(".para3",{duration: 6, x: 500});

export function threeParaAnimation(){
    ScrollTrigger.create({
        trigger: ".para3",
        animation: paraThreeTL,
        start: "top 50%",
        end: "top 50%",
        scrub: 1
        //markers: true
    });

}

const thirdImgTL = gsap.timeline();

thirdImgTL.from("#enforce",{duration:3, x:-1800});

export function threeImgAnimation(){
    ScrollTrigger.create({
        //markers: true,
        animation: thirdImgTL,
        trigger: "#enforce",
        start:"top, 100%",
        end: "bottom, 40%",
        scrub: 2
    });
}