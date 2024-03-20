import MoreAbout from '../components/MoreAbout'
import Selfie from './images/Foto Sorrindo Polo Verde 1.png'
import { useState } from 'react'
export default function About() {
    const [bool, setBool] = useState(false)
    return(
        <section>
            <div>
                <h2>About</h2>
            </div>
           <div className="flex">
                <div>
                    <img src={Selfie} alt='my selfie smiling'/>
                </div>
                <div>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer
                 took a galley of type and scrambled.dadawdawdwadawd
                </div>
           </div>
           {bool ? <MoreAbout boolChanger={setBool}/>
           : 
           <button onClick={()=> setBool(true)}>
            Show more 
            </button>}
           

        </section>
    )
}