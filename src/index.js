gsap.registerPlugin(ScrollTrigger);


var tl = gsap.timeline({ scrollTrigger:{
    trigger: '.two',
    start: '0% 95%',
    end: "50% 50%",
    scrub: true,
    markers: true,
},
})

tl.to(".txt", 0.15, {
    opacity: 0,
    transform: "translateY(-10rem)",
},"<")
tl.to(".bgu",0.1, {
    backgroundImage: "none"
}, "<")
tl.to(".milkB", { 
    scale: 3,
    transform: "translateY(72rem) translateX(-15rem) rotate(65deg)",
}, "<")

var tl2 = gsap.timeline({ scrollTrigger:{
    trigger: '.tw',
    start: '0% 95%',
    end: "50% 50%",
    scrub: true,
    markers: true,
},
})

tl2.to(".box", {
    transform: "translateY(92rem)",
    height: "2rem"
})
tl2.to(".cup", {
    opacity:1
}, "<")

