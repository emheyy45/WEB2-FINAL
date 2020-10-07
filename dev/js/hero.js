import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroImageTL = gsap.timeline();

heroImageTL.from(".hero-image",{duration: 6, x: 500, alpha:0});

export function imageHeroAnimation(){
    ScrollTrigger.create({
        trigger: ".hero-image",
        animation: heroImageTL,
        start: "top 50%",
        end: "top 50%",
        scrub: 1
        //markers: true
    });

    
}