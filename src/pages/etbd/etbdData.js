
import etbd01 from "./etbd01-target-classes.png";
import etbd02 from "./etbd02-behavior-output.png";
import etbd03 from "./etbd03-selection-and-fitness.webp";
import etbd04 from "./etbd04-recombination.webp";
import etbd05 from "./etbd05-mutation.webp";


const etbdData = [
    {
        title: "Learning as Evolution",
        text: [
            "McDowell's evolutionary theory of behavior dynamics (ETBD; McDowell, 2004) instantiates the Skinnerian analogy between positive reinforcement and natural selection (Skinner, 1981).",

            "In a nutshell, behavior is viewed as a tool that operates on the environment, with more or less success. Behavioral strategies that prove successful tend to be repeated; those that do not, tend to be abandoned.",

            "ETBD arranges a range of integers, that represent all behaviors that can be exhibited by an agent, its behavioral repertoire. The range can be separated into target classes, groups of integers that are occasionally reinforced."
        ],
        media: [
            {
                name: "etbd target classes",
                image: etbd01
            }
        ],
        caption: "Continuous-choice environment used to examine preference patterns in humans (top) and in ETBD (bottom; Popa, 2013). Two sources of reinforcement, Button 1 and Button 2, were programmed to deliver points according to certain rules (i.e., schedules of reinforcement). "
    },

    {
        title: "Darwinian rules",
        text: [
            "A typical experiment begins with a random population (generation 1), chosen from the available range (with replacement). From the population of behaviors available 'now', one is randomly chosen and emitted.",



            "The emission initiates local rules of selection, recombination, and mutation that transform the existing population into a new one (generation 2). From it, one behavior is randomly emitted, a third generation is created, and so on. The sequence of responses that emerges from the reiteration of Darwinian rules is analyzed as if they were produced by a biological organism."
        ],
        media: [
            {
                name: "etbd behavior output",
                image: etbd02,
            }
        ],
    },

    {
        title: "Selection",
        text: [
            "Parents for the next generation are always chosen with replacement from the existing population. If the emission was not reinforced, parents are chosen at random. If it was reinforced, a probability density function is used to assign greater chances of becoming parents to behaviors that are closer to the reinforced emission.",

            "<b>Selection and reinforcer magnitude.</b> The strength of selection events depends on the mean of the function (µ) and was shown to be computationally equivalent to the reinforcer magnitude (McDowell et. al., 2008; Popa & McDowell, 2016) , with strong selection events corresponding to high reinforcer magnitude."
        ],
        media: [
            {
                name: "etbd selection and fitness",
                image: etbd03
            }
        ]
    },

    {
        title: "Recombination",
        text: [
            "Two parents produce a child behavior by recombining their 'genotypes', the corresponding binary form of their integer. The method used here is called bit-string recombination: each bit in the child’s binary string has a 50% chance of coming from one parent or the other. Children produced this way tend to resemble their parents. "
        ],
        media: [
            {
                name: "etbd recombination",
                image: etbd04
            }
        ]
    },

    {
        title: "Mutation",
        text: [
            "Introduces a small amount of spontaneous variation in the population, by altering the genotypes of some child-behaviors. If a behavior is affected, one bit in its binary string is chosen at random and flipped - from 0 to 1 or from 1 to 0.",

            "<b>Mutation rate and the Default Mode Network (DMN)</b> The probability to be affected by mutation is referred to as mutation rate. This value is set in the beginning of the experiment and can take values between 0% (no mutants) and 100% (all mutants). The rate of mutation was hypothesized to correspond to the magnitude of spontaneous fluctuations of the brain's DMN (Popa & McDowell, 2016). This network of interconnected regions shows strong spontaneous activation at rest (Buckner, Andrews-Hanna, & Schacter, 2008; Raichle et al., 2001) and failure to suppress it during tasks that require sustained attention or response inhibition was associated with increased levels of behavioral variability (Weissman, Roberts, Visscher, & Woldorff, 2006; Feige, Biscaldi, Saville, Kluckert, & Bender, 2013). "
        ],
        media: [
            {
                name: "etbd mutation",
                image: etbd05
            }
        ]
    },

    {
        title: "References",
        text: [
            "Buckner, R. L., Andrews-Hanna, J. R., & Schacter, D. L. (2008). The brain’s default network: anatomy, function and relevance to disease. Annals of the New York Academy of Sciences, 1124, 1–38. doi: 10.1196/annals.1440.011",

            "McDowell, J. J (2004). A computational model of selection by consequences. Journal of the Experimental Analysis of Behavior, 81, 297–317. doi: 10.1901/jeab.2004.81-297",

            "Popa, A., & McDowell, J, J. (2016). Behavioral Variability in an Evolutionary Theory of Behavior Dynamics. The Journal of the Experimental Analysis of Behavior, 105, 270-290.",

            "Skinner, B. F. (1981). Selection by consequences. Science, 213, 501–504.",

            "Skinner, B. F. (1984). Selection by consequences. Behavioral and Brain Sciences, 7, 477–510.",

            "Raichle, M. E., MacLeod, A. M., Snyder, A. Z., Powers, W. J., Gusnard, D. A., & Shulman, G. L. (2001). A default mode of brain function. Proceedings of the National Academy of Sciences, 98, 676–682. doi: 10.1073/pnas.98.2.676",

            "Waslick, B., & Greenhill, L. L. . (2004). Attention-deficit/hyperactivity disorder. In J. M. Wiener & M. K. Dulcan (Eds.), The American psychiatric publishing textbook of child and adolescent psychiatry (3 ed., pp. 485-507). Washington DC: American Psychiatric Publishing Inc."

        ]
    }
]

export function getEtbdData() {
    return etbdData
}