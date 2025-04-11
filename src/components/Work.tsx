import { useEffect } from "react";
import "./styles/Work.css";
// import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import works from "../assets/works.json";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let translateX = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!boxes.length || !container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const style = window.getComputedStyle(boxes[0] as HTMLElement);
      const padding = parseInt(style.padding) / 2 || 0;

      translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });

    // Cleanup
    return () => {
      ScrollTrigger.getById("work")?.kill();
      timeline.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {works.map((work, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{work.title}</h4>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{work.tools.join(", ")}</p>
              </div>
              <img src={new URL(`../${work.image}`, import.meta.url).href} alt={work.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
