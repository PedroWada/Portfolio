export default function Contact() {
    return(
        <section className="section_contact">
            <div className="div_TitleContact">
                <h1>
                    Contact
                </h1>
            </div>
            <div className="social_medias">
                <h2>
                    Social medias
                </h2>
                <div>
                    <p>LIn</p>
                    <p>GitH</p>
                    <p>Inst</p>
                </div>
            </div>
            <div className="div_email">
                <h2>
                    Or send me an email
                </h2>
                <div className="div_emailInputs">
                    <div className="firstDivInput">
                        <input placeholder="Name"/>
                        <input placeholder="Email"/>
                    </div>
                    <div className="secondDivInput">
                        <textarea placeholder="Text"/>
                    </div>
                    
                </div>
            </div>   
        </section>
    )
}