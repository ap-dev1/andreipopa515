
import React from "react";

import AdhdHeader from "./AdhdHeader";
import SectionTemplate from "./SectionTemplate";
import AdhdReferences from "./AdhdReferences";
import ContactAuthor from "./ContactAuthor";

import { getAdhdText } from "./adhdText";


export default function AdhdPage() {

    const adhdText = getAdhdText()


    return (
        <article
            className="computational-adhd"
            style={{
                color: "#555",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
            }}

        >

            <AdhdHeader />

            <ContactAuthor />


            <SectionTemplate sectionData={adhdText.authorNote}></SectionTemplate>


            <SectionTemplate sectionData={adhdText.adhdAbstract}></SectionTemplate>

            <SectionTemplate sectionData={adhdText.adhdBackground}></SectionTemplate>

            <SectionTemplate sectionData={adhdText.etbdAdhd}></SectionTemplate>

            <SectionTemplate sectionData={adhdText.equifinality}></SectionTemplate>

            <SectionTemplate sectionData={adhdText.implications}></SectionTemplate>

            <SectionTemplate sectionData={adhdText.disruptedDynamics}></SectionTemplate>

            <SectionTemplate sectionData={adhdText.bitsToNeurons}></SectionTemplate>

            <SectionTemplate sectionData={adhdText.nsRewardSystem}></SectionTemplate>
            <SectionTemplate sectionData={adhdText.lowCod}></SectionTemplate>
            <SectionTemplate sectionData={adhdText.molecularDynamics}></SectionTemplate>

            <AdhdReferences />


        </article >
    )
}