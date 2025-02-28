import { useEffect, useRef, useState } from "react";
import '../ComponentStyle/ServiceScrollSlider.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceScrollSlider() {
    const sectionRef = useRef(null);
    const wrapperRef = useRef(null);
    const textRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const marginArr = ['0px', '-60px', '-120px']

    const dataArr = [
        {
            title: "graphics",
            description: "Curabitur sagittis lectus quis purus interdua vulputate justo hendrerit asellus ullamcorper sem vel tellus ultrices ac suscipit orci tincidunt enean ultrices gravida quam ac sagittis justo fermentum ut."
        },
        {
            title: "graphics",
            description: "Curabitur sagittis lectus quis purus interdua vulputate justo hendrerit asellus ullamcorper sem vel tellus ultrices ac suscipit orci tincidunt enean ultrices gravida quam ac sagittis justo fermentum ut."
        },
        {
            title: "graphics",
            description: "Curabitur sagittis lectus quis purus interdua vulputate justo hendrerit asellus ullamcorper sem vel tellus ultrices ac suscipit orci tincidunt enean ultrices gravida quam ac sagittis justo fermentum ut."
        },
        {
            title: "graphics",
            description: "Curabitur sagittis lectus quis purus interdua vulputate justo hendrerit asellus ullamcorper sem vel tellus ultrices ac suscipit orci tincidunt enean ultrices gravida quam ac sagittis justo fermentum ut."
        },
        {
            title: "graphics",
            description: "Curabitur sagittis lectus quis purus interdua vulputate justo hendrerit asellus ullamcorper sem vel tellus ultrices ac suscipit orci tincidunt enean ultrices gravida quam ac sagittis justo fermentum ut."
        },
        {
            title: "graphics",
            description: "Curabitur sagittis lectus quis purus interdua vulputate justo hendrerit asellus ullamcorper sem vel tellus ultrices ac suscipit orci tincidunt enean ultrices gravida quam ac sagittis justo fermentum ut."
        },
        {
            title: "graphics",
            description: "Curabitur sagittis lectus quis purus interdua vulputate justo hendrerit asellus ullamcorper sem vel tellus ultrices ac suscipit orci tincidunt enean ultrices gravida quam ac sagittis justo fermentum ut."
        },
    ]

    useEffect(() => {
        const section = sectionRef.current;
        const wrapper = wrapperRef.current;
        const text = textRef.current;
        if (!section || !wrapper || !text) return;

        const totalScrollDistance = wrapper.scrollWidth - window.innerWidth;

        gsap.to(wrapper, {
            x: `-${totalScrollDistance}px`,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalScrollDistance}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    if (self.getVelocity() !== 0) {
                        setIsScrolling(true);
                    }
                },
            },
        });

        gsap.to(text, {
            backgroundSize: "100% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalScrollDistance}`,
                scrub: 1,
            },
        });
        let scrollTimeout;
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            ScrollTrigger.killAll();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="horizontal-scroller-wrapper">
            <section className="scroller-wrapper"
                ref={sectionRef}>
                <div className="service-text-wrapper">
                    <h2 ref={textRef} className="stroke-fill-text ">
                        service
                    </h2>
                </div>

                <div className="scroller-display"
                    ref={wrapperRef}>
                    <div className="scroll-width" ></div>
                    {dataArr.map((value, index) => (
                        <div
                            key={index}
                            className="scroll-item"
                            style={{
                                marginTop: marginArr[index % marginArr.length],
                                transform: `scale(${isScrolling ? 0.9 : 1})`,
                            }}>
                            <small className="mb-3 fw-bold">0{index + 1}</small>
                            <h2 className="service-hedding text-warp" >{value.title}</h2>
                            <p className="service-description text-warp" >{value.description}</p>
                        </div>
                    ))}
                    <div className="scoll-item-wrapper-width"></div>
                </div>
            </section>
        </div>
    );
}



