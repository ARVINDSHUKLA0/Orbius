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
            title: "Identity",
            description: "I've developed complete brand identities for startups and established businesses, including logo design, brand guidelines, and visual language that effectively communicates their values and mission."
        },
        {
            title: "Website",
            description: "I've created responsive and engaging websites that enhance user experience, drive conversions, and establish a strong online presence for clients in various industries."
        },
        {
            title: "Marketing",
            description: "I've designed impactful print and digital marketing materials, including brochures, flyers, social media graphics, and digital ads, that have helped clients increase brand awareness and drive sales."
        },
        {
            title: "Packaging",
            description: "  I've created unique and visually appealing packaging designs that have helped products capture consumer attention and increase sales"
        },
        {
            title: "Infographics",
            description: "I've designed complex data and information into clear and compelling infographics for both print and digital use, improving information retention and engagement."
        },
        {
            title: "Engaging Graphics",
            description: "I create impactful graphics for social media, web, and ads, driving audience interaction and brand presence. This includes animated and interactive visuals, optimized for seamless online experiences."
        },
        {
            title: "Print",
            description: "I design brochures, catalogs, and marketing materials, focusing on paper, finishing, and layout for high-quality, lasting impressions."
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



