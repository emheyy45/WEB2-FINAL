import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const buttonIntroTL = gsap.timeline();

buttonIntroTL.from("#red-button",{duration: 3, x: -500});

export function buttonIntroAnimation(){
    ScrollTrigger.create({
        trigger: "#red-button",
        animation: buttonIntroTL,
        start: "top 50%",
        end: "top 50%",
        scrub: 2
    });
}