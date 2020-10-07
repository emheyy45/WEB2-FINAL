import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const showcaseTimeTL = gsap.timeline();

showcaseTimeTL.from("#header4",{duration: 6, x: 500, alpha:0});

export function showCaseAnimation(){
    ScrollTrigger.create({
        trigger: "#header4",
        animation: showcaseTimeTL,
        start: "top 70%",
        end: "top 70%",
        scrub: 3
        //markers: true
    });

    
}

const fourthImgTL = gsap.timeline();

fourthImgTL.from("#indie",{duration:3, x:-1800, alpha:0});

export function fourImgAnimation(){
    ScrollTrigger.create({
        //markers: true,
        animation: fourthImgTL,
        trigger: "#indie",
        start:"top, 100%",
        end: "bottom, 40%",
        scrub: 2
    });
}

const fourPTL = gsap.timeline();

fourPTL.from("#p4",{duration: 6, x: 500, alpha:0});

export function fourParaAnimation(){
    ScrollTrigger.create({
        trigger: "#p4",
        animation: fourPTL,
        start: "top 70%",
        end: "top 70%",
        scrub: 3
        //markers: true
    });

    
}