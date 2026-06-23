import "./HeroStyles.css";
function Hero(props){
    return(
        <>
        <div className={props.className}>
            <img alt="heroImg" src={props.srcImg}/>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <a href={props.url} className={props.linkClassName}
                 >{props.urlText}</a>
            </div>
        </div>
        </>
    )
}

export default Hero;