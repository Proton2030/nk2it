import { useEffect } from "react";
import "./company.css"
// import { company1, company10, company11, company12, company13, company14, company15, company16, company2, company3, company4, company5, company6, company7, company8, company9 } from "../../../../assets/Company_logo";
const CompanyList = () => {

    useEffect(() => {
        const root = document.documentElement;
        const marqueeElementsDisplayed: any = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent: any = document.querySelector("ul.marquee-content");

        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }

    }, [])



    return (
        <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container ">
            <div className="md:pt-5 px-4">
               
                <div className="marquee bg-white w-full px- h-56 mx-auto mt-10">
                    <ul className="ul marquee-content">
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        

                    </ul>
                </div>
            </div>
        </div>


    );
}
export default CompanyList
