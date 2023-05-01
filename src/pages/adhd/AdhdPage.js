import "./adhd.css";

import React from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import AdhdEtbd from "./AdhdEtbd"
import { getAdhdText } from "./adhdText";


export default function AdhdPage() {

    const adhdText = getAdhdText()

    // const sliderSettings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 6,
    //     slidesToScroll: 1,

    //     // arrows: true,
    //     // adaptiveHeight: true,
    //     // autoplay: true, //  default 3000 autoplaySpeed

    // }


    return (
        <div className="adhd">

            <article className="computational-adhd">

                <h1>{adhdText.adhdMeta.title}</h1>
                <h2>{adhdText.adhdMeta.author}</h2>
                <h3>{adhdText.adhdMeta.affiliation}</h3>


                <p className="abstract">
                    <span>Abstract</span>
                    {adhdText.adhdMeta.abstract}
                </p>


                <p className="author-note">
                    <span>Author note</span>
                    {adhdText.adhdMeta.authorNote}
                </p>

                <p className="author-contact">
                    <span>Author information</span>
                    {adhdText.adhdMeta.authorNote}
                </p>


                <div className="adhd-background">
                    <span>Background</span>
                    {adhdText.adhdBackground.map(item => {
                        return (
                            <p>{item}</p>
                        )
                    })}
                </div>

                <AdhdEtbd />

                {/* <div className="etbd-adhd">

                  
                </div> */}



            </article >

        </div >
    )
}