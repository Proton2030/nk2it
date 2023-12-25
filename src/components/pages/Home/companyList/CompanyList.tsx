
import { useEffect } from "react";
import "./company.css";
// import Adove from "../../../../assets/images/Adove.png";
// import Advantech_small from "../../../../assets/images/Advantech_small.png";
// import Bewatec from "../../../../assets/images/Bewatec.png";
// import HighFive from "../../../../assets/images/HighFive.png";
// import Horizontal from "../../../../assets/images/Horizontal.png";
// import c1 from "../../../../assets/images/c1.png";
// import c2 from "../../../../assets/images/c2.png";
// import c3 from "../../../../assets/images/c3.jpg";
// import c4 from "../../../../assets/images/c4.jpg";
// import c5 from "../../../../assets/images/c5.jpg";
// import c6 from "../../../../assets/images/c6.jpg";
// import c7 from "../../../../assets/images/c7.jpg";
// import c8 from "../../../../assets/images/c8.jpg";
// import c9 from "../../../../assets/images/c9.jpg";
// import c10 from "../../../../assets/images/c10.jpg";
// import c11 from "../../../../assets/images/c11.jpg";
// import c12 from "../../../../assets/images/c12.jpg";
// import c13 from "../../../../assets/images/c13.jpg";
// import c14 from "../../../../assets/images/c14.jpg";
// import c15 from "../../../../assets/images/c15.jpg";
// import c16 from "../../../../assets/images/c16.jpg";
// import c17 from "../../../../assets/images/c17.jpg";
// import c18 from "../../../../assets/images/c18.jpg";
// import c19 from "../../../../assets/images/c19.jpg";
// import c20 from "../../../../assets/images/c20.jpg";
// import c21 from "../../../../assets/images/c21.jpg";
// import c22 from "../../../../assets/images/c22.jpg";
// import c23 from "../../../../assets/images/c23.jpg";
// import c24 from "../../../../assets/images/c24.jpg";
// import c25 from "../../../../assets/images/c25.jpg";
// import c26 from "../../../../assets/images/c26.jpg";
// import c27 from "../../../../assets/images/c27.jpg";

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

  return (
    <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container ">
      <div className="md:pt-5 px-4">
        <div className="marquee bg-white w-full px- h-56 mx-auto mt-10">
          <ul className="ul marquee-content">
            {/* Use the imported variables directly */}
            <li><img src="/src/assets/images/Adove.png" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/Advantech_small.png" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/Bewatec.jpg" alt="" /></li>
            {/* Add more images using the imported variables */}
            <li><img src="/src/assets/images/c1.png" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c2.png" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c3.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c4.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c5.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c6.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c7.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c8.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c9.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c10.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c11.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c12.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c13.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c14.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c15.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c16.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c17.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c18.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c19.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c20.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c21.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c22.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c23.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c24.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images//c25.png"alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c26.png" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/c27.png" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/HighFive.jpg" alt="Company Logo" /></li>
            <li><img src="/src/assets/images/Horizontal.jpg" alt="Company Logo" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
