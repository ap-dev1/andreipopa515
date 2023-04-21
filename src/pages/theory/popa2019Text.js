import changeInState from "./change-in-state.gif";
import zebraFishNeurons from "./zebra-fish-neurons.gif";
import freeWillExperiments from "./free-will-experiments.png"

const popa2019Text = {
    authorNote:

        "The ideas discussed here were inspired by my work on computational models of learning and by 15 semesters of teaching Abnormal Psychology and Theories of Personality - that is, repeated attempts to organize this information in a coherent progression and to integrate it in the broader scientific enterprise. This work has been discussed, in various stages of development, in Popa, 2015; 2016 and 2017. This document aims to provide a concise outline of the main thesis.",

    title: "The Emergence of You",

    author: "Andrei Popa",
    url: "https://psyarxiv.com/m87an/",
    date: "09-08-2019",
    citation: "Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an. Retrieved from https://psyarxiv.com/m87an/",
    background: [
        "When did we become who we are?",

        "Modern psychological explanations recognize that human development is influenced by biological, psychological, and sociocultural variables, variables that interact in complicated ways ​throughout an individual's lifetime. How, when, and where do these variables interact, <i>exactly</i>?",

        "How does society influence biology?",
        "Where do genes interact with families?",
        "How do nature and nurture mediate each other?",

        "If one would want to observe, predict, and influence these interactions, where would one begin?",

        "Statistical jargon aside, to interact is to modify: something, somewhere, must undergo some kind of observable transformations.",

        "When and where do these transformations occur?",

        "How do they map on the plethora of contributing factors and developmental outcomes?",
        "What are sentience, agency, and will? What role, if any, do they play in human life?",

        "A handful of bio-psycho-sociocultural variables, somehow, give rise to seven billion unique personalities. How?",

        "What principles explain change in psychological systems?  What change do they govern, exactly?",
    ],



    sections: [
        {
            title: "What is being changed",
            text: [
                "Neurons are located in a confined, 3-dimensional space.",
                "A neuron can be in one of two states: 1 or 0.",
                "The configuration of neurons that fire in a given time window - i.e., 100 ms - changes continuously, as action potentials travel from cell to cell.",
                "<b>The succession of configurations of active neurons</b> is the material counterpart of all forms of experience and expression and and the interface between Nurture and Nature."
            ],
            media: [
                {
                    name: "change in state",
                    image: changeInState
                }
            ]
        },


        {
            title: "Experience and Expression",
            text: [
                "<b>By experience</b> I mean everything that a nervous system can detect, also called input, sensation, memory, context, stimulus, discriminative stimulus, reinforcer, family, culture, environment - depending on the discipline and scope. All these are examples of what a human nervous system can detect.",

                "<b>By expression</b> I mean everything that a nevous system can do, or whatever we measure about it, also known as output, behavior, response, decision, thinking, imagination, disorders, personality, will, sentience, biases, a self, attitudes, and so on.",

                "All these phenomena are written in neuronal activity, just like a piece of software is written in a programming language, or an image - in its mathematical representation. All information needed to represent and modify the phenomenon is encapsulated in neuronal activity.",
                "In other words, neuronal activity does not underlie experience and expression, it is experience and expression."
            ]
        },

        {
            title: "Nature and Nurture",
            text: [
                "All high-level structures, like personality traits, disorders, cognitive strategies, parenting and attachment styles, etc. emerge from this dynamic, from the succession of activation states.",



                "Every variable that contributes to the emergence of such structures, does so by interfering with this dynamic, either directly or indirectly, by affecting the graph's graph’s properties, like the number and distribution of neurons;  speed of transmission, axons' length, the ratio of white matter to grey matter, and many others,",

                "* ... interface between biology and culture, agent and environment, vulnerability and stressors, etc. for an example, see Computational ADHD",

            ]
        },

        {
            title: "Why change-in-state is the only viable explanation",

            text: [
                "Causally speaking, changes in neuronal activation states start before cognitive, behavioral, and emotional reactions and after physicochemical changes. They are as close as it comes to the brain without being brain, <i>per se</i>.",

                "Fast and sensitive enough to react to any immediate experience, no matter how subtle or short-lived (e.g., 'a look', subtle voice inflections, etc.) and to be proximate cause for every form of expression (e.g., implicit cognition, thinking, carrying a conversation, ruminating, etc.",

                "Complex and versatile enough to represent (i.e. 'encode') the richness of psychological dimensions and phenomena.",

                "Domain independent; common, binary-based representation for all psychological phenomena.",

                "Amenable to scientific investigation",

                "Structures that can be described in terms of nodes and edges - like neurons and synapses - are called graphs. The transition between any two consecutive configurations of active neurons is mathematically equivalent to morphing graph A into graph B, ad infinitum. These structures can be described mathematically (e.g., Reimann et al., 2017) and the transformations can be represented computationally.",
            ],
            media: [
                {
                    name: "zebra fish neurons",
                    image: zebraFishNeurons,
                    url: "https://www.cell.com/current-biology/fulltext/S0960-9822(13)00002-X"
                }
            ],
            caption: "Recent advancements in neuroscience (e.g., Muto et. al., 2013) made it possible to record the succession of activation states in simpler organisms during key activities, like stalking prey. Such methodologies can be used to further our understanding about the relation between stimuli, neuronal activation, and approach/avoidance behavior, knowledge that can be used to further verify computational theories of neuronal dynamics, and so on (see also <b>>Computational ADHD</b>')."

        },

        {
            title: "How does one configuration become another",
            text: [
                "Efforts to map the graph's structure are well under way (think connectome; Seung, 2012) . In addition, we must also identify the basic rules (i.e., 'forces', 'principles', etc.) that transform one configuration into another, thus shaping, little by little, an initial structure into a mature connectome, i.e., the dynamics of development, learning, or adaptation.",



                "One approach to identify principles of change is to use computational models to implement theories of neuronal dynamics and to simulate their behavioral-cognitive outcomes. The evolutionary framework is a strong candidate (see McDowell, 2010, for a relevant reading; see the sections on 'Computational ADHD' and 'ETBD'; until then, see Popa, 2013). In parallel, one can start from raw data - recordings of neurons - and use machine learning to 'deduce' possible rules or to eliminate impossible ones. The two approaches can inform and verify each other in interesting ways."
            ]
        },
        {
            title: "Experimental approach to free will and related concepts",
            text: [
                "If will can manifest itself in the material world, then it must impact neuronal activity in observable ways (see Libel, 1985); same goes for agency, intentions, expectations, etc. The huge number of neurons that may go in these phenomena will pose a challenge. On the other hand, the differences of interest should be detectable in a short time window (e.g., 1000 ms). The search for their neuronal signatures can begin by studying the alternatives (e.g., involuntary, unintentional, etc.). They are easier to define and can be provoked systematically in laboratory conditions, independent of the participant, which makes them useful baselines. Any systematic perturbations in baseline would be worth exploring further. ",

                "For example, pick a simple behavior, like moving an index finger, and compare neuronal activity in scenarios A, B, and C. Whatever is in B but not in A could be an indicator of agency, or intentionality; whatever is unique to C could be a neuronal signature of 'trying', of 'mental effort'; ."
            ],
            media: [
                {
                    name: "experimental apprach to free will",
                    image: freeWillExperiments,
                }
            ],
        },

        {
            title: "Implications for artificial intelligence and transhumanism",
            text: [
                "A working framework for the emergence of individuality will have far-reaching implications, from social policy, to artificial intelligence, human augmentation, etc. One of the questions that emerges is how much does biochemistry matter? Is organic material necessary, or is it just 'the best evolution could do', not engineering, but doodling mindlessly for too many years? If only neuronal activity is essential, does it mean that any medium would do? Can the same phenomena be created from a different material? Can the activity of a nervous system be mimicked in digital form? If yes, if one does 'record' the nervous system of a human, what exactly has one achieved?​ The way in which we will engage these questions will define the evolutionary trajectory of our species."
            ]
        },

        {
            title: "Summary",
            text: [
                "The succession of configurations of active states is proposed as the 'vehicle of change' in psychological systems and the material and conceptual 'bridge' between high-level theories of brain functioning (e.g., Edelman's Neuronal Darwinism) and theories of behavior change (e.g., Skinner's Behavioral Darwinism; see McDowell, 2010, for a parallel). It is the proposed 'medium' for all forms of expression and experience; as the 'interface' between biology and culture; between nurture and nature; the 'source code' of thinking, of doing, of being who we are. We are being written in it as we happen, by low-level Darwinian tendencies (behaviorally manifested as approach and avoidance), with a splash of consciousness."
            ]
        },

        {
            title: "Acknowledgements",
            text: [
                "I am grateful to my graduate adviser, Jack McDowell, for teaching me the ABCs of complexity science, behavior analysis, and computational modelling. To my dissertation committee members, Monica Capra, Scott Lilienfeld, Jack Marr, and Phil Wolff, for their guidance, wisdom, and patience. To Phillipe Rochat, Stella Lourenco, and all the beautiful minds that made the Culture Club an intellectual delight. To David Lynn, Leslie Taylor, and the 2011-12 O.R.D.E.R. fellows, for a growth-provoking experience. To all the wonderful people in the Emory Psychology Department, thank you for believing in me."
            ]
        },

        {
            title: "References",
            text: [
                "Libet, B. (1985).Unconscious cerebral initiative and the role of conscious will in voluntary action.Behavioral and Brain Sciences, 8, 529 - 566.",

                "Muto, A., Ohkura, M., Abe, G., Nakai, J., Kawakami, K. (2013).Real - Time  Visualization of Neuronal Activity during Perception.Current Biology, 23, 307 - 311.",

                "McDowell, J. (2010).Behavioral and neural Darwinism: Selectionist function and mechanism in  adaptive behavior dynamics.Behavioural Processes, 84, 358–365.",

                "Popa, A. (2015).Towards an Evolutionary Account for the Dynamics of Cognizant Systems.Darwin Day Lecture Series, Georgia State University, Atlanta, GA.",

                "Popa, A. (2016).Population Thinking, Psychodiversity, and Human Development.Darwin Day Lecture Series, Georgia State University, Atlanta, GA.",

                "Popa, A., (2017).Towards a Dynamic Account of Human Development.Paper presented at the 43rd Annual Convention of the Association for Behavior Analysis International, Denver, CO.",

                "Reimann, M.W., Nolte, M., Scolamiero, M., Turner, K., Perin, R., Chindemi, G., Dłotko, P., Levi, R., Hess, K., & Markram, H. (2017).Cliques of Neurons Bound into Cavities Provide a Missing Link between Structure and Function.Frontiers in Computational Neuroscience, 11, 48.",

                "Seung, S. (2012).Connectome: How the Brain's Wiring Makes Us Who We Are. Houghton Mifflin Harcourt."
            ]
        }
    ]
}


export function getPopa2019Text() {
    return popa2019Text
}