import "./sparc.css"
import { getSparcData } from "./sparcData";
const abstracts = getSparcData();

export default function Sparc2016() {

    return (
        <div className="sparc">

            <p className="description">
                Original research projects contributed by my mentees to SpARC 2016. For an overview of my teaching experience, see https://www.andreipopa.dev/.


                {/* - part of the ongoing saga described under Service. */}
            </p>

            <p className="description">
                All experimental procedures were written in VB.Net by yours trully and were derivations of Fast Matching - the procedure I developed for my dissertation project (Popa, 2013). For a browser demo and to see how the results compare to computational data produced by ETBD, see https://www.andreipopa.dev/.
            </p>

            <p className="description">
                https://www.agnesscott.edu/sparc/
            </p>

            <p className="description">
                https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en
            </p>




            {
                abstracts.map((item) => {
                    return (
                        <article className="sparc-card">
                            <h2 className="title">{item.title}</h2>
                            <h3 className="authors">{item.authors}</h3>
                            <p className="abstract cutoff-text-v2">{item.abstract}</p>
                            <input className="expand-cbx" type="checkbox"></input>



                        </article>
                    )
                })
            }

        </div>

    )
}