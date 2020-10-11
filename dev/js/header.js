import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headImageTL = gsap.timeline();

headImageTL.from("#paximg",{duration: 6, x: 500, alpha:0});

export function headImageAnimation(){
    ScrollTrigger.create({
        trigger: "#paximg",
        animation: headImageTL,
        start: "top 50%",
        end: "top 50%",
        scrub: 1
        //markers: true
    });

    
}