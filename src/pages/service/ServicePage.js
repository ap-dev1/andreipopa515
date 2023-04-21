import "./service-page.css";
import qrcode from "./mediafire.png";

export default function ServicePage() {
    return <div className="service-page">

        <div className="description-container">
            <div className="description" qrcode="qrcode">
                <p className="description">
                    This cover letter accompanied my second research complaint with Emory University. The first one is included - see the Fast Matching chapter. The first was used against me; the second was ignored.
                </p>

                <a className="mediafire" href="http://www.mediafire.com/file/vq108bgxlsrvuk4/POPA_v_MCDOWELL_2020.pdf/file">

                    http://www.mediafire.com/file/vq108bgxlsrvuk4/POPA_v_MCDOWELL_2020.pdf/file
                </a>
            </div>

            <img src={qrcode}></img>
        </div>

        <article className="cover-letter">

            2/25/2020<br />
            Office for Research Compliance<br />
            Emory University<br />
            22 Dowman Drive<br />
            Atlanta, GA, 30322<br /><br />


            Dear colleague,<br /><br />


            My name is Andrei Popa. I completed my PhD in Psychology in 2013, at Emory University, where I studied with Dr. Jack McDowell (Clinical Program).

            <br />

            In 2015, I expressed concerns about a series of incidents that involved Dr. McDowell and his students, Bryan Klapes and Nick Calvin (at the time; Olivia Calvin since 2016). My concerns were dismissed, despite overwhelming evidence of wrongdoing.

            <br />

            Subsequent developments indicate that those incidents were part of a plan to appropriate my research contributions and to erase that entire period of time from the lab’s history. The evidence I describe here show that this plan was orchestrated by Dr. Jack McDowell, who began its implementation while I was still a graduate student. This plan is ongoing, and all evidence show that Dr. McDowell has no intention to stop before all links between my name and my contributions are severed, and my findings - rediscovered by him and his collaborators.

            <br />

            In pursuing this goal, my colleagues resorted to plagiarism, citation handling, fraudulent use of my name, false and misleading statements, and so on. In parallel, Dr. McDowell used his role as graduate adviser to trick me into making detrimental choices, to sabotage my job search, and to deter me from seeking remedy. The evidence I bring to support these statements include: McDowell’s letter of recommendation, (copies of) journal articles, emails, IRB documents, etc.

            <br />

            This situation wouldn’t have escalated if my colleagues’ actions would have been examined impartially in the first place. When I voiced concerns, those in charge dismissed them without examination, or worse. In doing so, they exposed me to further harm; they encouraged Dr. McDowell’s egregious abuse of status; and they exposed the research ecosystem to individuals who were capable and willing to play active roles in the events described in this document.


            <br />
            The events are described in the Background and Events section of this document (pp. 4 - 34). Use the bookmarks in the navigation pane to move between sections.

            <br />


            Respectfully,<br /><br /><br />





            Andrei Popa, PhD

        </article>





    </div>
}


{/* <p className="description">
            This cover letter accompanied my second research complaint with Emory University, completely ignored for three years. It incorporates the first complaint, from 2016 (the Fast Matching chapter). According to the policy written by Emory, the evidence associated with complaints are deleted after seven years, so about now (April 2023). This allows them to discard all existing evidence and to claim the existence of evidence that never actually existed - like an investigation report. All that remains is a decision that can no longer be scrutinized.
        </p>

        <p className="description">
            Since these events, I've come to reealize that I mistook a business model for the actions of individual bad actors.
        </p> */}