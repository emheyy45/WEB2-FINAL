import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2Animation = gsap.timeline();

section2Animation.from("#badge",{duration: 3, x: -500});

export function section2ImageAnimation(){
    ScrollTrigger.create({
        trigger: "#pax",
        animation: section2Animation,
        start: "top 50%",
        end: "top 50%",
        scrub: 2, 
        markers: true
    });
}