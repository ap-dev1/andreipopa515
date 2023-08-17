import React from "react"
import parse from "html-react-parser"
import EmoryTemplate from "../emory/EmoryTemplate"



export default function IntermezzoAfterBirth() {
    let title = "After birth",
        thumbnail = null,
        date = "August 10, 2023",
        tags = [],
        text1 = [
            "My mother rejected me immediately after birth. I think she would have left me in the hospital if not for her parents, who raised me until about fourth grade.",
            "During this time I was the target of unchecked agression and regular child abuse. I was just in the way. This changed in the early 90s, when communism fell and people were allowed to own property. This meant they could buy their appartments from the state, but my mother didn't have the money. ",
            "My grandma agreed to pay for it but bought for me and my sister, in our names. She was afraid that if something would happen to her my mother would simply abandon me and puting the apartment in my name was a way to keep me safe, or safer. If my mother wouldn't love me, at least this way she won't hurt me or give me away.",
            "This is how I became a home owner at ten years old and that was when my mother's indiference became hostility. She couldn't prevent my birth and now she was living in my apartment. If I knew what she was going to do I would have ran away that instant.",
            "Fast forward to 2005. I am accepted in a PhD program in Psychology at Emory University. I can finally look at the future with optimism, I have a chance to escape. My grandmother is crying of hapiness. Her nephew will be a doctor, in the States! I've never seen anyone so happy and so proud. A few months later she died of a stroke. One of the last things she said to me a few days before was to never give away the apartment, never ever, no matter what. Soon after, my mother guilted me into donating her the appartment, robbing me of the only thing of value I ever owned.",
            "As if that wasn't enough, she somehow managed to ruin the whole PhD thing before it even started, poisoning my future forever. See Emory",

        ];

    return (
        <EmoryTemplate
            title={title}
            date={date}
            tags={tags}
            text={text1}
            thumbnail={thumbnail}
        />
    )
}


