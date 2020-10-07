import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const whatSectionTL = gsap.timeline();

whatSectionTL.from(".header2",{duration: 6, x: 500});

export function sectionTwoAnimation(){
    ScrollTrigger.create({
        trigger: ".header2",
        animation: whatSectionTL,
        start: "top 50%",
        end: "top 50%",
        scrub: 1,
        markers: true
    });

    
}

const paraTwoTL = gsap.timeline();

paraTwoTL.from(".p2",{duration: 6, x: 500});

export function twoParaAnimation(){
    ScrollTrigger.create({
        trigger: ".p2",
        animation: paraTwoTL,
        start: "top 50%",
        end: "top 50%",
        scrub: 1,
        markers: true
    });

}

const secondImgTL = gsap.timeline();

secondImgTL.from("#pax",{duration:3, x:-1800});

export function twoImgAnimation(){
    ScrollTrigger.create({
        markers: true,
        animation: secondImgTL,
        trigger: "#pax",
        start:"top, 100%",
        end: "bottom, 40%",
        scrub: 2
    });
}