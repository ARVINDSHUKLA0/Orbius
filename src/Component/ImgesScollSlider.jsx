import { motion, useScroll } from "framer-motion";
import '../ComponentStyle/ImgesScollSlider.css'
import { useRef, useState, useEffect } from "react";
import ImgesSildeOne from '/assets/img/ImgesSildeOne.jpg'
import ImgesSildeTwo from '/assets/img/ImgesSildeTwo.jpg'
import ImgesSildeThree from '/assets/img/ImgesSildeThree.jpg'
import ImgesSildeFour from '/assets/img/ImgesSildeFour.jpg'
import ImgesSildeDropFive from '/assets/img/ImgesSildeFive.jpg'
import ImgesSildeDropSix from '/assets/img/ImgesSildeSix.jpg'
import ImgesSildeDropSeven from '/assets/img/ImgesSildeSeven.jpg'
import ImgesSildeDropEight from '/assets/img/ImgesSildeEight.jpg'
const ImgesScollSlider = () => {
    const [Imgesname, setImageName] = useState('featured project')
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
 
  const [xClass1, setXClass1] = useState("start-pos-one");
  const [xClass2, setXClass2] = useState("start-pos-two");

  useEffect(() => {
    const unsubscribe1 = scrollYProgress.on("change", (latest) => {
      if (latest < 0.5) {
        setXClass1("move-left-start");
        setXClass2("move-right-start");
      } else {
        setXClass1("move-left-end");
        setXClass2("move-right-end");
      }
    });

    return () => unsubscribe1();
  }, [scrollYProgress]);
  const ImgesNamefunc = (hedinng) => {
    setImageName(hedinng)
    console.log("hit")
  }
  const services = [
    { img:  ImgesSildeOne, heading: "Arvind", img1: ImgesSildeDropFive },
    { img:  ImgesSildeTwo, heading: "Aman", img1: ImgesSildeDropSix },
    { img:  ImgesSildeThree, heading: "Vikash", img1:ImgesSildeDropSeven },
    { img:  ImgesSildeFour, heading: "Rahul", img1: ImgesSildeDropEight }, 
  ];

  return (
    <section ref={scrollRef} className="scroll-section position-relative pb-100">
      <div className="container-fluid">
        <motion.div className={`row m-0 scroll-row ${xClass1}`}>
          {services.map((prose1, index) => (
            <div key={index} onMouseEnter={() => ImgesNamefunc(prose1.heading)} className="col-lg-3 col-md-3 col-sm-6 col-12 p-0 mx-2 custom-margi">
              <img className="img-fluid" src={prose1.img} alt="" />
            </div>
          ))}
        </motion.div>
 
        <motion.div className={`row scroll-row m-0  mt-md-3 mt-lg-3 ${xClass2}`}>
          {services.map((prose2, index) => (
            <div key={index} onMouseEnter={() => ImgesNamefunc(prose2.heading)} className="col-lg-3 col-md-3 col-sm-6 col-12 p-0 mx-2 custom-margi">
              <img className="img-fluid " src={prose2.img1} alt="" />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="custom-postion">
        <h6>{Imgesname}</h6>
      </div>
    </section>
  );
};

export default ImgesScollSlider;
