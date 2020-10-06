import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const buttonIntroTL = gsap.timeline();

buttonIntroTL.from("#badge",{duration: 3, x: -500});

export function buttonIntroAnimation(){
    ScrollTrigger.create({
        trigger: "#badge",
        animation: buttonIntroTL,
        start: "top 50%",
        end: "top 50%",
        scrub: 2,
        markers: true
    });
}