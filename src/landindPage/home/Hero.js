function Hero() {
    return ( 
        <>
        <div className="container p-5">
            <div className="row">
                <img src='media/images/homeHero.png' alt="Hero" className="mb-5"/>
                <h1>Invest in Everything</h1>
                <p></p>
                <button>
                    <a href="/signup" className="text-decoration-none text-white">Sign Up Now</a>
                </button>
            </div>
        </div>
        </>

      );
}

export default Hero;