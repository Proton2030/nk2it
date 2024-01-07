import { useEffect } from "react";
import "./company.css";
import * as images from "../../../../assets/images";

const CompanyList = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    if (marqueeContent) {
      root.style.setProperty("--marquee-elements", String(marqueeContent.children.length));
    }

    const numMarqueeElementsDisplayed = parseInt(marqueeElementsDisplayed, 10);
    for (let i = 0; i < numMarqueeElementsDisplayed; i++) {
      if (marqueeContent) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, []);

  const generateImageElements = () => {
    const imageElements = [];
    for (let i = 1; i <= 27; i++) {
      const imageName = `c${i}` as keyof typeof images; // Type assertion
      const imagePath = images[imageName];
      imageElements.push(<li key={i}><img src={imagePath} alt={`Company Logo ${i}`} /></li>);
    }
    return imageElements;
  };

  return (
    <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container ">
      <div className="md:pt-5 px-4">
        <div className="marquee  w-full px- h-56 mx-auto mt-10">
          <ul className="ul marquee-content">
            {generateImageElements()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
