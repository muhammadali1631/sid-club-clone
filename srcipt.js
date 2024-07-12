let crsr = document.querySelector('#cursor')
let crsrB = document.querySelector('#cursor-blur')
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    crsrB.style.left = dets.x- 125+"px";
    crsrB.style.top = dets.y-125 +"px";
})

// let h4all = document.querySelectorAll('#nav h4')
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//         crsr.style.scale = 3
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })
//     elem.addEventListener("mouseleave", function(){
//         crsr.style.scale = 1
//         crsr.style.border = "0px solid #95C11E"
//         crsr.style.backgroundColor = "#95C11E"
//     })
// })

gsap.to("#nav",{
    backgroundColor: "black",
    height: "90px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        marker: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})
gsap.from("#about-us img, #about-us", {
    y:90,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        start: "top 65%",
        end: "top 63%",
        scrub: 3
    }
})
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 47%",
        scrub: 4,
    }
})
gsap.from("#colon2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 47%",
        scrub: 4,
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    }
})