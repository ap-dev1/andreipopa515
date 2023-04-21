const adhdRefs = [
    "Arcos-Burgos M, Muenke M (November 2010). 'Toward a better understanding of ADHD: LPHN3 gene variants and the susceptibility to develop ADHD'. Atten Defic Hyperact Disord. 2 (3): 139–147. PMC 3280610  . PMID 21432600. doi:10.1007/s12402-010-0030-2.",

    "Baum, W. M. (1974). On two types of deviations from the Matching Law: Bias and undermatching. Journal of the Experimental Analysis of Behavior, 22(1), 231-242.",

    "Baum, W. M. (1979). Matching, undermatching, and overmatching in studies of choice. Journal of the Experimental analysis of Behavior, 32(2), 269-281.",

    "Biederman, J., Milberger, S., Faraone, S. V., Kiely, K., Guite, J., Mick, E., Ablon, S., Warburton, R., Reed E. (1995). Family-environment risk factors for attention-deficit hyperactivity disorder. A test of Rutter's indicators of adversity. Archives of General Psychiatry, 52, 464-70.  doi: 10.1001/archpsyc.1995.03950180050007",

    "Buckner, R. L., Andrews-Hanna, J. R., & Schacter, D. L. (2008). The brain’s default network: anatomy, function and relevance to disease. Annals of the New York Academy of Sciences, 1124, 1–38. doi: 10.1196/annals.1440.011",

    "Calvin, O. (2019). Clonal Amplification of Behavior: A Simple Interpretation of the Effect of Reinforcement (Doctoral dissertation). Retrieved from https://etd.library.emory.edu/concern/etds/d791sh03v?locale=en",

    "Chandler DJ, Waterhouse BD, Gao WJ (May 2014). 'New perspectives on catecholaminergic regulation of executive circuits: evidence for independent modulation of prefrontal functions by midbrain dopaminergic and noradrenergic neurons'. Front. Neural Circuits. 8: 53. PMC 4033238  . PMID 24904299. doi:10.3389/fncir.2014.00053",

    "Corkum P. V., & Siegel, L. S. (1993). Is the Continuous Performance Task a valuable research tool for use with children with Attention-Deficit-Hyperactivity Disorder? Journal of Child Psychology and Psychiatry, 34, 1217-39.",

    "D'Agati, Casarelli, Pitzianti, & Pasini, (2010). Overflow movements and white matter abnormalities in ADHD. Progress in Neuro-Psychopharmacology & Biological Psychiatry, 34, 441-445. doi: 10.1016/j.pnpbp.2010.01.013.",

    "Davison, M., & McCarthy, D. (1988). The Matching Law: A Research Review: Lawrence Erlbaum Associates, Inc.",

    "Edelman, G. M. (1987). Neural Darwinism: The Theory of Neuronal Group Selection. Basic Books, New York.",

    "Feige, B., Biscaldi, M., Saville, C. W. N., Kluckert, C., & Bender, S. (2013). On the temporal characteristics of performance variability in attention deficit hyperactivity disorder (ADHD). PLoS ONE, 8, e69674. doi:10.1371/journal.pone.0069674. eCollection 2013.",

    "Findley, J. D. (1958). Preference and switching under concurrent scheduling. . Journal of the Experimental Analysis of Behavior, 1(2), 123-144.",

    "Fabiano, G. A., Pelham Jr, W. E., Coles, E. K., Gnagy, E. M., Chronis-Tuscano, A., & O'Connor, B. C. (2009). A meta-analysis of behavioral treatments for attention-deficit/hyperactivity disorder. Clinical Psychology Review, 29 (2), 129-140.",

    "Faraone, S. V., & Mick. E. (2010). Molecular genetics of attention deficit hyperactivity disorder. Psychiatric Clinics of North America, 33, 159-80. doi: 10.1016/j.psc.2009.12.004.",

    "Gizer, I. R., Ficks, C., & Waldman, I. D. (2009). Candidate gene studies of ADHD: a metaanalytic review. Human genetics, 126(1), 51-90.",

    "Hamming, R. W. . (1950). Error detecting and error correcting codes. Bell System Technical Journal, 29(2), 147-160.",

    "Kelly, A. M. C., Uddin, L. Q., Biswal, B. B., Castellanos, F. X., & Milham, M. P. (2008). Competition between functional brain networks mediates behavioral variability. NeuroImage, 39, 527–537. doi:10.1016/j.neuroimage.2007.08.008",

    "Kollins, S. H., Lane, S. D., & Shapiro, S. K. (1997). Experimental analysis of childhood psychopathology: A laboratory matching analysis of the behavior of children diagnosed with Attention-Deficit Hyperactivity Disorder (ADHD). The Psychological Record.",

    "Kollins, S. H., Newland, M. C., & Critchfield, T. S. (1997). Human sensitivity to reinforcement in operant choice: How much do consequences matter? Psychonomic Bulletin & Review, 4(2), 208-220.",

    "Krain AL, Castellanos FX (August 2006). 'Brain development and ADHD'. Clin Psychol Rev. 26 (4): 433–444. PMID 16480802. doi:10.1016/j.cpr.2006.01.005.",

    "Laucht M., Skowronek, M. H., Becker, K., Schmidt, M. H., Esser, G., Schulze, T. G., Rietschel, M. (2007). Interacting effects of the dopamine transporter gene and psychosocial adversity on attention-deficit/hyperactivity disorder symptoms among 15-year-olds from a high-risk community sample. Archives of General Psychiatry, 64, 585-90.",

    "Li, D., Sham, C. P., Owen, J. M., and He, L. (2006). Meta-analysis shows significant association between dopamine system genes and attention deficit hyperactivity disorder (ADHD). Human molecular genetics, 15, 2276-84. 10.1093/hmg/ddl152.",

    "Malenka RC, Nestler EJ, Hyman SE(2009). 'Chapters 10 and 13'.In Sydor A, Brown RY.Molecular Neuropharmacology: A Foundation for Clinical Neuroscience(2nd ed.).New York: McGraw - Hill Medical.pp. 266, 315, 318–323. ISBN 978 - 0 - 07 - 148127 - 4.",

    "Mash, E.J., & Barkley, R.A. (2003).Child Psychopathology.New York: Guilford Press.",

    "Mash, E.J., & Wolfe, D.A. (2013).Abnormal child psychology.Belmont, CA: Wadsworth Cengage Learning.",

    "Mick, E., Todorov, A., Smalley, S., Hu, X., Loo, S., Todd, R.D., Biederman, J., Byrne, D., Dechairo, B., Guiney, A., McCracken, J., McGough, J., Nelson, S.F., Reiersen, A.M., Wilens, T.E., Wozniak, J., Neale, B.M., & Faraone, S.V. (2010).Family - based genome - wide association scan of attention - deficit / hyperactivity disorder.J Am Acad Child Adolesc Psychiatry, 49, 898 - 905. e3.doi: 10.1016 / j.jaac.2010.02.014.",

    "McDowell, J. (2019).On the current status of the evolutionary theory of behavior dynamics: Status of the Evolutionary Theory.Journal of the Experimental Analysis of Behavior, 111, 130–145. DOI: 10.1002 / jeab.495.",

    "McDowell, J. (2010).Behavioral and neural Darwinism: Selectionist function and mechanism in adaptive behavior dynamics.Behavioural Processes, 84, 358–365.",

    "McDowell, J.J(2004).A computational model of selection by consequences.Journal of the Experimental Analysis of Behavior, 81, 297–317. doi: 10.1901 / jeab.2004.81 - 297.",

    "McDowell, J.J(2013a).On the theoretical and empirical status of the matching law and matching theory.Psychological Bulletin, 139, 1000–1028. doi: 10.1037 / a0029924",

    "McDowell, J.J(2013b).A quantitative evolutionary theory of adaptive behavior dynamics.Psychological Review, 120, 731–750. doi: 10.1037 / a0034244",

    "Nigg, E. (2009).Parenting practices and attention - deficit / hyperactivity disorder: new findings suggest partial specificity of effects.Journal of American Academy of Child and Adolescent Psychiatry, 48, 146 - 54. doi: 10.1097 / CHI.0b013e31819176d0.",

    "Popa, A. (2013).The Evolutionary Theory of Behavior Dynamics: Complexity, Darwinism, and the Emergence of High - Level Phenotypes(Doctoral dissertation).Retrieved from http://pid.emory.edu/ark:/25593/f8hw4",

    "Popa, A., & McDowell, J J. (2011).A Computational Model of Selection by Consequences: Evidence that Mutation is Computationally Equivalent to Impulsivity.Talk presented at the 37th Annual Convention of the Association for Behavior Analysis International, Denver, CO.",

    "Popa, A., & McDowell, J J. (2012).The Computational Theory of Behavior Dynamics Predicts Effects of COD on Behavioral Variability: Evidence from experiments with human participants.Talk presented at the 38th Annual Convention of the Association for Behavior Analysis International, Seattle, WA.",

    "Popa, A., & McDowell, J, J. (2016).Behavioral Variability in an Evolutionary Theory of Behavior Dynamics.The Journal of the Experimental Analysis of Behavior, 105(2), 270 - 290.",

    "Popa, A., Calvin, N., & McDowell, J J. (2014).Multifinality and Equifinality in an Evolutionary Theory of Behavior Dynamics.Talk presented at the 40th Annual Convention of the Association for Behavior Analysis International, Chicago, IL.",

    "Popa, A. (2015).Towards an Evolutionary Account for the Dynamics of Cognizant Systems.Darwin Day Lecture Series, Georgia State University, Atlanta, GA.",

    "Popa, A. (2016).Population Thinking, Psychodiversity, and Human Development.Darwin Day Lecture Series, Georgia State University, Atlanta, GA.",

    "Popa, A., (2017).Towards a Dynamic Account of Human Development.Paper presented at the 43rd Annual Convention of the Association for Behavior Analysis International, Denver, CO.",

    "Raichle, M.E., MacLeod, A.M., Snyder, A.Z., Powers, W.J., Gusnard, D.A., & Shulman, G.L. (2001).A default mode of brain function. Proceedings of the National Academy of Sciences, 98, 676–682. doi: 10.1073 / pnas.98.2.676",

    "Shull, R.L., & Pliskoff, S.S. (1967).Changeover Delay and concurrent schedules: Some effects on relative performance measures.Journal of the Experimental Analysis of Behavior, 10(6), 517 - 527.",

    "Taylor, D., Lincoln, A.J., & Foster, S.L. (2010).Impaired behavior regulation under conditions of concurrent variable schedules of reinforcement in children with ADHD.Journal of Attention Disorders, 13(4), 358 - 368.",

    "Temple, W., Scown, J.M., & Foster, T M. (1995).Changeover delay and concurrent - schedule performance in domestic hens.Journal of the Experimental Analysis of Behavior, 63(1), 71 - 95.",

    "Volkow N.D., Fowler, J.S., Wang, G.J., Baler, R., & Telang.F. (2009).Imaging dopamine's role in drug abuse and addiction. Neuropharmacology, 56 Suppl 1:3-8. doi: 10.1016/j.neuropharm.2008.05.022",

    "Waldman, I.D. , & Rhee, S.H. (2002).Behavioral and molecular genetic studies of ADHD.In S.Sandberg(Ed.), Hyperactivity and Attention Disorders in Childhood(2 ed.).New York: Cambridge University Press.",

    "Waslick, B., & Greenhill, L.L. . (2004).Attention - deficit / hyperactivity disorder.In J.M.Wiener & M.K.Dulcan(Eds.), The American psychiatric publishing textbook of child and adolescent psychiatry(3 ed., pp. 485 - 507).Washington DC: American Psychiatric  Publishing Inc.",

    "Weissman, D. H., Roberts, K. C., Visscher, K. M., & Woldorff, M. G. (2006). The neural bases of momentary lapses in attention. Nature Neuroscience, 9, 97 –978. doi: 10.1038/nn1727",
]


export function getAdhdRefs() {
    return adhdRefs
}