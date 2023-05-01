

export default function AdhdSlider(images) {

    // console.log(props ? "yesss, props" : "what the fuck?")
    // console.log(props ? `${props[0].length} images.` : "what the fuck?")
    // console.log(props ? [props][0] : "what the fuck?")

    // const dummy = ["a", "b", "c"]

    return (
        <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
                {/* <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div> */}

                {images.map((card, index) => (
                    <div key={index}>
                        <h2>{card.name}</h2>
                        <img alt={card.name} src={card.image} width="100" height="100" />
                        <p>{card.name}</p>
                        {/* <ul>
              {card.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul> */}
                        <button className='btn'>Buy Now</button>
                    </div>
                ))}
            </Slider>
        </div>
    );
}