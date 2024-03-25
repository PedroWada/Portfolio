import image from '../pages/images/Subject1.png'
export default function MoreAbout({boolChanger}){
    return(
        <div className="restAbout">

            <div className="first_info flex secao">
                <div>
                    <h2>My history</h2>
                    <div>
                    Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer
                 took a galley of type and scrambled.dadawdawdwadawd
                    </div>
                </div>
                <div>
                    <img src={image} alt='A'/>
                </div>
            </div>
            <div className="second_info flex secao">
                <div>
                 <img src={image} alt='A'/>
                </div>
                <div>
                    Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer
                 took a galley of type and scrambled.dadawdawdwadawd
                </div>
            </div>
            
            <div className="third_info secao">
                <div>
                    <h1>Curiosit</h1>
                </div>
                <div className="slider">
                    <div>
                        A
                    </div>
                    <div>
                        B
                    </div>
                    <div>
                        C
                    </div>
                    <div>
                        D
                    </div>
                    <div>
                        E
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => boolChanger(false)}>Show less</button>
            </div>


       </div>
    )
}