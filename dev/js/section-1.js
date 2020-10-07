import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headerIntroTL = gsap.timeline();

headerIntroTL.from(".header1",{duration: 5, x: -200});

export function headerIntroAnimation(){
    ScrollTrigger.create({
        trigger: ".header1",
        animation: headerIntroTL,
        start: "top 50%",
        end: "top 50%",
        scrub: 1,
        markers: true
    });

    
}


