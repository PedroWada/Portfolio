import image from './images/Subject1.png'
export default function Home() {
    return(
        <section>
            <div className='flex'>
                <div className="div_greetings">
                    <div>
                        <h1>Hi, I'm Pedro Wada</h1>
                        <h1>Web Developer</h1>
                    </div>
                </div>
                <div className="div_firstphoto">
                    <img className='firstphoto' src={image} alt="Me as an animation" />
                </div>
            </div>
        </section>
    )

}