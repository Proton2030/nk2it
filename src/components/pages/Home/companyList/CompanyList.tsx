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
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/PA_Partner_APPROVED_Color_HighRes.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-2.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-3.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-4.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-5.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-6.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-7.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-8.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-9.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-10.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-11.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-12.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-13.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-14.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-15.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-16.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-17.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-18.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-19.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-20.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/HighFive_Logo-CMYK_XL_JPG-2-scaled.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/msp_bronze.png"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/Kaspersky-logo-green.png"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/Horizontal-Version-of-Huawei-Corporate-Logo_2018-scaled.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/sophos-authorized-partner-icon-rgb.png"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/Adobe.png"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/Advantech_small.png"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/Bewatec.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/08/Tassta_small.png"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2021/11/seagate_PMS_horizontal_pos-scaled.jpg"}/></li>
                        <li><img src={"https://nk2it.com.au/wp-content/uploads/2023/04/Vertiv-Channel-Badge-2020-SILVER-WHITE.png"}/></li>
                    </ul>
                </div>
            </div>
        </div>


    );
}
export default CompanyList
