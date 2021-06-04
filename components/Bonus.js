import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
const Bonus = () => {
    return (
        <div>
            <div className="bonus_container">
                <div>
                    <p className="bonus_Heaing">Oh snap. <span className="bonus_box">It's bonus time</span></p>
                    <div className="bonux_box">
                        <p className="bonus_align">When you join CU today, we are throwing in...</p>
                        <h1 className="s3">3</h1>
                        <p className="incredible">incredible bonuses</p>
                    </div>
                </div>

            </div>
            <div className="bonux_flex">
                <div>
                    <img width="70%" src="Group 131.svg" alt="no image" />
                </div>
                <div>
                    <h1 className="fo"><span className="bus">#1</span> The Art of Handling Conflict</h1>
                    <p><DoneIcon className="doneSign" />How to improve relationships that have had long-term friction</p>
                    <p><DoneIcon className="doneSign" />How to disarm someone who's being combative by using one honest sentence</p>
                    <p><DoneIcon className="doneSign" />3 phrases that turn enemies into teammates</p>
                    <p><DoneIcon className="doneSign" />Learn when to avoid conflict, and when to embrace it</p>
                </div>
            </div>
            <div className="bonux_flex2">
                <div>
                    <h1 className="fo"><span className="bus">#2</span> Group Interactions</h1>
                    <p><DoneIcon className="doneSign" />How to be as good with groups as individuals</p>
                    <p><DoneIcon className="doneSign" />How to be a leader, without being a bully</p>
                    <p><DoneIcon className="doneSign" />How to engage the whole group</p>
                    <p><DoneIcon className="doneSign" />How to immediately be accepted into any type of group</p>
                    <p><DoneIcon className="doneSign" />How to find “the seam” in the conversation and jump in without being interrupted</p>
                </div>
                <div>
                    <img width="70%" src="Group 131.svg" alt="no image" />
                </div>
            </div>
           <div className="blgss">
               <div >
                   <img className="blgs" src="./photo5.PNG" alt="no image" />
               </div>
               <div className="rblgs">
                   <p className="rb">"When living with charisma, LIFE is everywhere."</p>
                   <p className="r">With CU, every situation and every person, even your super powered boss’s boss becomes an opportunity to unlock and be yourself/have fun.  You’re not on autopilot anymore.  It is so much more fun – it’s just a huge positive impact on life!</p>
                   <p className="r">Elisa M.</p>
               </div>
           </div>
           <div className="blgss">
               <div className="rblgss">
                   <p className="rb">""I feel liberated""</p>
                   <p className="r">I have already noticed people like me better, they talk to me about their lives and they ask me about mine. I’ve felt a shift in myself. I thought that after completing this course I’d become a smooth talker… But this course is so much more than that, it’s about creating successful, happy and kind human beings who feel so confident in themselves that their confidence pushes others to be better human beings.</p>
                   <p className="r">Nedim L.</p>
               </div>
               <div >
                   <img className="blgs" src="./photo6.PNG" alt="no image" />
               </div>
           </div>
        </div>
    )
}
export default Bonus